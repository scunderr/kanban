export const delayRemovalAnimation = (elem, animationName, ms) => {
    setTimeout(() => elem.classList.remove(animationName), ms);
}