var _header = document.querySelector('.header');
var _topicOneNext = document.querySelector('.next1');
var _topicTwoNext = document.querySelector('.next2');
var _topicThreeNext = document.querySelector('.next3');
var _topicFourNext = document.querySelector('.next4');
var _topicFiveNext = document.querySelector('.next5');
var _topicSixNext = document.querySelector('.next6');
var _topicSevenNext = document.querySelector('.next7');
var _topicEightNext = document.querySelector('.next8');
var _topicNineNext = document.querySelector('.next9');
var _topicTenNext = document.querySelector('.next10');
var _topicElevenNext = document.querySelector('.next11');
var _onClickVideos = document.querySelector('.onClickVideos');
var _onClickQuiz = document.querySelector('.onClickQuiz');
var _onClickWorksheets = document.querySelector('.onClickWorksheets');
var _onHoverVideos = document.querySelector('.onHoverVideos');
var _onHoverQuiz = document.querySelector('.onHoverQuiz');
var _onHoverWorksheets = document.querySelector('.onHoverWorksheets');

document.addEventListener('contextmenu', event => event.preventDefault());

function onClickWorksheet() {
    window.location.replace('./assets/documents/Worksheets.pdf')
}
function onClickQuiz() {
    window.location.replace('https://quizz-awesome.netlify.app/?quizz=https://what-is-sound.web.app/src/questions.js')
}
function onClickVideos() {
    window.location.replace('https://www.youtube.com/watch?v=X5iUWGipy2s')
}

_onClickVideos.addEventListener('mouseover', function handleMouseOver() {
    _onHoverVideos.style.display = 'block';
});

_onClickQuiz.addEventListener('mouseover', function handleMouseOver() {
    _onHoverQuiz.style.display = 'block';
});
_onClickWorksheets.addEventListener('mouseover', function handleMouseOver() {
    _onHoverWorksheets.style.display = 'block';
});

_onClickVideos.addEventListener('mouseout', function handleMouseOut() {
    _onHoverVideos.style.display = 'none';
});

_onClickQuiz.addEventListener('mouseout', function handleMouseOut() {
    _onHoverQuiz.style.display = 'none';
});

_onClickWorksheets.addEventListener('mouseout', function handleMouseOut() {
    _onHoverWorksheets.style.display = 'none';
});


function onStart() {
    _header.style.display = 'flex';
    _topicOneNext.style.display = 'block';
    _topicTwoNext.style.display = 'none';
    _topicThreeNext.style.display = 'none';
    _topicFourNext.style.display = 'none';
    _topicFiveNext.style.display = 'none';
    _topicSixNext.style.display = 'none';
    _topicSevenNext.style.display = 'none';
    _topicEightNext.style.display = 'none';
    _topicNineNext.style.display = 'none';
    _topicTenNext.style.display = 'none';
    _topicElevenNext.style.display = 'none';
}

function onClickOneNext() {
    _header.style.display = 'flex';
    _topicOneNext.style.display = 'none';
    _topicTwoNext.style.display = 'block';
    _topicThreeNext.style.display = 'none';
    _topicFourNext.style.display = 'none';
    _topicFiveNext.style.display = 'none';
    _topicSixNext.style.display = 'none';
    _topicSevenNext.style.display = 'none';
    _topicEightNext.style.display = 'none';
    _topicNineNext.style.display = 'none';
    _topicTenNext.style.display = 'none';
    _topicElevenNext.style.display = 'none';
}
function onClickTwoNext() {
    _header.style.display = 'flex';
    _topicOneNext.style.display = 'none';
    _topicTwoNext.style.display = 'none';
    _topicThreeNext.style.display = 'block';
    _topicFourNext.style.display = 'none';
    _topicFiveNext.style.display = 'none';
    _topicSixNext.style.display = 'none';
    _topicSevenNext.style.display = 'none';
    _topicEightNext.style.display = 'none';
    _topicNineNext.style.display = 'none';
    _topicTenNext.style.display = 'none';
    _topicElevenNext.style.display = 'none';
}

function onClickThreeNext() {
    _header.style.display = 'flex';
    _topicOneNext.style.display = 'none';
    _topicTwoNext.style.display = 'none';
    _topicThreeNext.style.display = 'none';
    _topicFourNext.style.display = 'block';
    _topicFiveNext.style.display = 'none';
    _topicSixNext.style.display = 'none';
    _topicSevenNext.style.display = 'none';
    _topicEightNext.style.display = 'none';
    _topicNineNext.style.display = 'none';
    _topicTenNext.style.display = 'none';
    _topicElevenNext.style.display = 'none';
}

function onClickFourNext() {
    _header.style.display = 'flex';
    _topicOneNext.style.display = 'none';
    _topicTwoNext.style.display = 'none';
    _topicThreeNext.style.display = 'none';
    _topicFourNext.style.display = 'none';
    _topicFiveNext.style.display = 'block';
    _topicSixNext.style.display = 'none';
    _topicSevenNext.style.display = 'none';
    _topicEightNext.style.display = 'none';
    _topicNineNext.style.display = 'none';
    _topicTenNext.style.display = 'none';
    _topicElevenNext.style.display = 'none';
}

function onClickFiveNext() {
    _header.style.display = 'flex';
    _topicOneNext.style.display = 'none';
    _topicTwoNext.style.display = 'none';
    _topicThreeNext.style.display = 'none';
    _topicFourNext.style.display = 'none';
    _topicFiveNext.style.display = 'none';
    _topicSixNext.style.display = 'block';
    _topicSevenNext.style.display = 'none';
    _topicEightNext.style.display = 'none';
    _topicNineNext.style.display = 'none';
    _topicTenNext.style.display = 'none';
    _topicElevenNext.style.display = 'none';
}

function onClickSixNext() {
    _header.style.display = 'flex';
    _topicOneNext.style.display = 'none';
    _topicTwoNext.style.display = 'none';
    _topicThreeNext.style.display = 'none';
    _topicFourNext.style.display = 'none';
    _topicFiveNext.style.display = 'none';
    _topicSixNext.style.display = 'none';
    _topicSevenNext.style.display = 'block';
    _topicEightNext.style.display = 'none';
    _topicNineNext.style.display = 'none';
    _topicTenNext.style.display = 'none';
    _topicElevenNext.style.display = 'none';
}

function onClickSevenNext() {
    _header.style.display = 'flex';
    _topicOneNext.style.display = 'none';
    _topicTwoNext.style.display = 'none';
    _topicThreeNext.style.display = 'none';
    _topicFourNext.style.display = 'none';
    _topicFiveNext.style.display = 'none';
    _topicSixNext.style.display = 'none';
    _topicSevenNext.style.display = 'none';
    _topicEightNext.style.display = 'block';
    _topicNineNext.style.display = 'none';
    _topicTenNext.style.display = 'none';
    _topicElevenNext.style.display = 'none';
}

function onClickEightNext() {
    _header.style.display = 'flex';
    _topicOneNext.style.display = 'none';
    _topicTwoNext.style.display = 'none';
    _topicThreeNext.style.display = 'none';
    _topicFourNext.style.display = 'none';
    _topicFiveNext.style.display = 'none';
    _topicSixNext.style.display = 'none';
    _topicSevenNext.style.display = 'none';
    _topicEightNext.style.display = 'none';
    _topicNineNext.style.display = 'block';
    _topicTenNext.style.display = 'none';
    _topicElevenNext.style.display = 'none';
}

function onClickNineNext() {
    _header.style.display = 'flex';
    _topicOneNext.style.display = 'none';
    _topicTwoNext.style.display = 'none';
    _topicThreeNext.style.display = 'none';
    _topicFourNext.style.display = 'none';
    _topicFiveNext.style.display = 'none';
    _topicSixNext.style.display = 'none';
    _topicSevenNext.style.display = 'none';
    _topicEightNext.style.display = 'none';
    _topicNineNext.style.display = 'none';
    _topicTenNext.style.display = 'block';
    _topicElevenNext.style.display = 'none';
}

function onClickTenNext() {
    _header.style.display = 'none';
    _topicOneNext.style.display = 'none';
    _topicTwoNext.style.display = 'none';
    _topicThreeNext.style.display = 'none';
    _topicFourNext.style.display = 'none';
    _topicFiveNext.style.display = 'none';
    _topicSixNext.style.display = 'none';
    _topicSevenNext.style.display = 'none';
    _topicEightNext.style.display = 'none';
    _topicNineNext.style.display = 'none';
    _topicTenNext.style.display = 'none';
    _topicElevenNext.style.display = 'block';
}