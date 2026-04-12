from pathlib import Path
from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parents[1]
JPG_EXTS = {".jpg", ".jpeg", ".png", ".webp"}


SPECS = [
    {
        "source": ROOT / "images" / "gallery",
        "target": ROOT / "images" / "gallery" / "thumbs",
        "max_size": (640, 640),
        "quality": 78,
    },
    {
        "source": ROOT / "images" / "wishes",
        "target": ROOT / "images" / "wishes" / "thumbs",
        "max_size": (960, 960),
        "quality": 82,
    },
]


def generate_thumbnail(source_path: Path, target_path: Path, max_size: tuple[int, int], quality: int) -> None:
    target_path.parent.mkdir(parents=True, exist_ok=True)

    with Image.open(source_path) as image:
        image = ImageOps.exif_transpose(image)
        if image.mode not in ("RGB", "L"):
            image = image.convert("RGB")
        elif image.mode == "L":
            image = image.convert("RGB")

        image.thumbnail(max_size, Image.Resampling.LANCZOS)
        image.save(target_path, quality=quality, optimize=True, progressive=True)


def main() -> None:
    for spec in SPECS:
        source_root: Path = spec["source"]
        target_root: Path = spec["target"]

        for source_path in source_root.rglob("*"):
            if not source_path.is_file():
                continue
            if source_path.suffix.lower() not in JPG_EXTS:
                continue
            if target_root in source_path.parents:
                continue

            relative_path = source_path.relative_to(source_root)
            target_path = target_root / relative_path
            generate_thumbnail(source_path, target_path, spec["max_size"], spec["quality"])
            print(f"generated: {target_path.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
