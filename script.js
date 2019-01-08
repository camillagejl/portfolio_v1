// Check device

window.addEventListener("load", showPage);

function showPage() {
    console.log('showPage');
    document.querySelector('#portfolio_v1_thumb').addEventListener('click', showPortfolioV1);
    document.querySelector('#keakoen_thumb').addEventListener('click', showKeaKoen);
    document.querySelector('#fronter_thumb').addEventListener('click', showFronter);
    document.querySelector('#skal_vi_snakke_thumb').addEventListener('click', showSkalViSnakke);
    document.querySelector('#sweet_dreams_thumb').addEventListener('click', showSweetDreams);
    document.querySelector('#ingolfs_thumb').addEventListener('click', showIngolfs);
    document.querySelector('#interview_thumb').addEventListener('click', showInterview);
    document.querySelector('#stilartsite_thumb').addEventListener('click', showStilartsite);

    document.querySelector('.portfolio_overlay').addEventListener('click', hidePortfolioPages);

    //https://css-tricks.com/snippets/javascript/loop-queryselectorall-matches/
    //"Loop Over querySelectorAll Matches" to select all exit buttons.
    [...document.querySelectorAll('.portfolio__exit')].forEach(function (button) {
        button.addEventListener('click', hidePortfolioPages);
    });

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

function showPortfolioPages() {
    console.log('showPortfolioPages');
    document.querySelector('.portfolio_pages').classList.remove('hidden');
    document.querySelector('html').classList.add('hide_overflow');

}

function hidePortfolioPages() {
    console.log('hidePortfolioPages');

    [...document.querySelectorAll('.portfolio_preview')].forEach(function (page) {
        page.scrollTop = 0;
        page.classList.add('hidden');
    });

    document.querySelector('.portfolio_pages').classList.add('hidden');
    document.querySelector('html').classList.remove('hide_overflow');


}


function showPortfolioV1() {
    console.log('showPortfolioV1');
    showPortfolioPages();
    document.querySelector('#portfolio_v1').classList.remove('hidden');
}

function showKeaKoen() {
    console.log('showKeaKoen');
    showPortfolioPages();
    document.querySelector('#keakoen').classList.remove('hidden');
}

function showFronter() {
    console.log('showFronter');
    showPortfolioPages();
    document.querySelector('#fronter').classList.remove('hidden');
}

function showSkalViSnakke() {
    console.log('showSkalViSnakke');
    showPortfolioPages();
    document.querySelector('#skal_vi_snakke').classList.remove('hidden');
}

function showSweetDreams() {
    console.log('showSweetDreams');
    showPortfolioPages();
    document.querySelector('#sweet_dreams').classList.remove('hidden');
}

function showIngolfs() {
    console.log('showIngolfs');
    showPortfolioPages();
    document.querySelector('#ingolfs').classList.remove('hidden');
}

function showInterview() {
    console.log('showInterview');
    showPortfolioPages();
    document.querySelector('#interview').classList.remove('hidden');
}

function showStilartsite() {
    console.log('showStilartsite');
    showPortfolioPages();
    document.querySelector('#stilartsite').classList.remove('hidden');
}
