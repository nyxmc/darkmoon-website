/** @type SkinRender */
var skinRender;

function createSkinrender() {
    if (skinRender) {
        skinRender.reset();
        skinRender = null;
    }

    const element = document.getElementById("skinrender");

    const height = Number.parseInt(
        window.getComputedStyle(
            document.getElementById("race-card")
        )
            ["height"]
            .replace("px", "")
    );

    const options = {
        showOutlines: true,
        showAxes: false,
        showGrid: false,
        autoResize: true,
        controls: {
            enabled: false,
            zoom: false,
            rotate: true,
            pan: false,
        },
        canvas: {
            width: Math.round(height / 2),
            height: height
        },
    };

    return new SkinRender(options, element);
}

document.addEventListener(
    "DOMContentLoaded",
    () => skinRender = createSkinrender()
);

document.addEventListener("RenderSkin", (e) => {
    if (!skinRender) return;
    skinRender = createSkinrender();
    skinRender.render(e.detail)
});
