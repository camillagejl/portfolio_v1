// Check device

window.addEventListener("load", showPage);

function showPage() {
    console.log('showPage');
    document.querySelector('.portfolio_item').addEventListener('click', showPortfolioPage);
    document.querySelector('.portfolio_overlay').addEventListener('click', hidePortfolioPage);
    document.querySelector('.portfolio__exit').addEventListener('click', hidePortfolioPage);

    console.log('is touch:', is_touch_device());

    document.querySelector('html').classList.remove('is_touch_device', 'is_not_touch_device');
    document.querySelector('html').classList.add(
        is_touch_device() ? 'is_touch_device' : 'is_not_touch_device'
    );
}


/**
 * Checks if the website is running on a touch device.
 *
 * @see https://stackoverflow.com/a/4819886
 *
 * @returns boolean
 */
function is_touch_device() {
    var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
    var mq = function(query) {
        return window.matchMedia(query).matches;
    }

    if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
        return true;
    }

    // include the 'heartz' as a way to have a non matching MQ to help terminate the join
    // https://git.io/vznFH
    var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
    return mq(query);
}

// Portfolio


function showPortfolioPage() {
    document.querySelector('.portfolio_pages').classList.remove('hidden');
    document.querySelector('.portfolio_pages').classList.remove('hidden');
    document.querySelector('html').classList.add('hide_overflow');
}

function hidePortfolioPage() {
    document.querySelector('.portfolio_pages').classList.add('hidden');
    document.querySelector('html').classList.remove('hide_overflow');
}
