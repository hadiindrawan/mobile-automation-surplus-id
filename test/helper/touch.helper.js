export async function touchAnywhere() {
    const screenRect = await browser.getWindowRect();
    const randomX = Math.floor(Math.random() * screenRect.width);
    const randomY = Math.floor(Math.random() * screenRect.height);

    await browser.touchPerform([
        {
            action: 'tap',
            options: {
                x: randomX,
                y: randomY,
            },
        },
    ]);
}