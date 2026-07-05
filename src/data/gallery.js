const images = import.meta.glob("../assets/gallery/*.jpg", {
    eager: true,
    import: "default"
});

export const gallery = Object.values(images).map((img, i) => ({
    image: img,
    alt: `Nail design ${i + 1}`
}));