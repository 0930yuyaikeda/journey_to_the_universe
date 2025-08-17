'use strict';

// ***==========*** ↓↓ Window Size Warning! ↓↓ ***==========***
function checkScreenWidth() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 1439) {
        alert("このサイトは画面サイズ1440以上を推奨しています。現在はスマートフォンではお楽しみいただけません。");
    }
}

// Runs once on page load
window.onload = checkScreenWidth;

// Runs every time the window size is changed
window.addEventListener('resize', checkScreenWidth);

// ***==========*** ↑↑ Window Size Warning! ↑↑ ***==========***

// ***==========*** ↓↓  Setting scroll event! ↓↓  ***==========***
window.onload = function() {
    // Setting show "Bottom"
    let journeyToTheUniverseScrollInner = document.getElementById('journey_to_the_universe_scroll-inner');
    journeyToTheUniverseScrollInner.scrollIntoView(false);

    // Get element when on page load.
    const journeyToTheUniverseScroll = document.getElementById("journey_to_the_universe_scroll");
    const firstScrollPosition = journeyToTheUniverseScroll.scrollTop;

    // Set element when on page load.
    // All switch
    let smokeSwitch = false;
    let musicContainerSwitch = false;
    let logoContainerSwitch = false;
    let haveANiceJourneySwitch = false;
    // everest
    let everestTitleJapaneseSwitch =false;
    let everestTitleEnglishSwitch =false;
    let everestDistanceSwitch =false;
    let everestSentenceJapaneseSwitch =false;
    let everestSentenceEnglishSwitch =false;
    // plane
    let planeImgSwitch =false;
    let planeTitleJapaneseSwitch =false;
    let planeTitleEnglishSwitch =false;
    let planeDistanceSwitch =false;
    let planeSentenceJapaneseSwitch =false;
    let planeSentenceEnglishSwitch =false;
    // aurora
    let auroraTitleJapaneseSwitch =false;
    let auroraTitleEnglishSwitch =false;
    let auroraDistanceSwitch =false;
    let auroraSentenceJapaneseSwitch =false;
    let auroraSentenceEnglishSwitch =false;
    // ISS
    let issImgSwitch =false;
    let issTitleJapaneseSwitch =false;
    let issTitleEnglishSwitch =false;
    let issDistanceSwitch =false;
    let issSentenceJapaneseSwitch =false;
    let issSentenceEnglishSwitch =false;
    // moon
    let moonTitleJapaneseSwitch =false;
    let moonTitleEnglishSwitch =false;
    let moonDistanceSwitch =false;
    let moonSentenceJapaneseSwitch =false;
    let moonSentenceEnglishSwitch =false;
    // venus
    let venusTitleJapaneseSwitch =false;
    let venusTitleEnglishSwitch =false;
    let venusDistanceSwitch =false;
    let venusSentenceJapaneseSwitch =false;
    let venusSentenceEnglishSwitch =false;
    // mars
    let marsTitleJapaneseSwitch =false;
    let marsTitleEnglishSwitch =false;
    let marsDistanceSwitch =false;
    let marsSentenceJapaneseSwitch =false;
    let marsSentenceEnglishSwitch =false;
    // mercury
    let mercuryTitleJapaneseSwitch =false;
    let mercuryTitleEnglishSwitch =false;
    let mercuryDistanceSwitch =false;
    let mercurySentenceJapaneseSwitch =false;
    let mercurySentenceEnglishSwitch =false;
    // sun
    let sunTitleJapaneseSwitch =false;
    let sunTitleEnglishSwitch =false;
    let sunDistanceSwitch =false;
    let sunSentenceJapaneseSwitch =false;
    let sunSentenceEnglishSwitch =false;
    // Jupiter
    let jupiterTitleJapaneseSwitch =false;
    let jupiterTitleEnglishSwitch =false;
    let jupiterDistanceSwitch =false;
    let jupiterSentenceJapaneseSwitch =false;
    let jupiterSentenceEnglishSwitch =false;
    // Saturn
    let saturnTitleJapaneseSwitch =false;
    let saturnTitleEnglishSwitch =false;
    let saturnDistanceSwitch =false;
    let saturnSentenceJapaneseSwitch =false;
    let saturnSentenceEnglishSwitch =false;
    // Uranus
    let uranusTitleJapaneseSwitch =false;
    let uranusTitleEnglishSwitch =false;
    let uranusDistanceSwitch =false;
    let uranusSentenceJapaneseSwitch =false;
    let uranusSentenceEnglishSwitch =false;
    // Neptune
    let neptuneTitleJapaneseSwitch =false;
    let neptuneTitleEnglishSwitch =false;
    let neptuneDistanceSwitch =false;
    let neptuneSentenceJapaneseSwitch =false;
    let neptuneSentenceEnglishSwitch =false;
    // Pluto
    let plutoTitleJapaneseSwitch =false;
    let plutoTitleEnglishSwitch =false;
    let plutoDistanceSwitch =false;
    let plutoSentenceJapaneseSwitch =false;
    let plutoSentenceEnglishSwitch =false;
    // Haumea
    let haumeaTitleJapaneseSwitch =false;
    let haumeaTitleEnglishSwitch =false;
    let haumeaDistanceSwitch =false;
    let haumeaSentenceJapaneseSwitch =false;
    let haumeaSentenceEnglishSwitch =false;
    // Makemake
    let makemakeTitleJapaneseSwitch =false;
    let makemakeTitleEnglishSwitch =false;
    let makemakeDistanceSwitch =false;
    let makemakeSentenceJapaneseSwitch =false;
    let makemakeSentenceEnglishSwitch =false;
    // Eris
    let erisTitleJapaneseSwitch =false;
    let erisTitleEnglishSwitch =false;
    let erisDistanceSwitch =false;
    let erisSentenceJapaneseSwitch =false;
    let erisSentenceEnglishSwitch =false;
    // Voyager 1
    let voyager1ImgSwitch =false;
    let voyager1TitleJapaneseSwitch =false;
    let voyager1TitleEnglishSwitch =false;
    let voyager1DistanceSwitch =false;
    let voyager1SentenceJapaneseSwitch =false;
    let voyager1SentenceEnglishSwitch =false;
    // Voyager 1 Message
    let voyager1MessageImgSwitch =false;
    let voyager1MessageJapaneseSwitch =false;
    let voyager1MessageEnglishSwitch =false;
    // asteroid
    let asteroid1Switch  =false;
    let asteroid2Switch  =false;
    let asteroid3Switch  =false;
    let asteroid4Switch  =false;
    let asteroid5Switch  =false;
    let asteroid6Switch  =false;
    let asteroid7Switch  =false;
    let asteroid8Switch  =false;
    let asteroid9Switch  =false;
    let asteroid10Switch =false;
    //shooting star
    let shootingStar1Switch =false;
    let shootingStar2Switch =false;
    let shootingStar3Switch =false;
    let shootingStar4Switch =false;
    let shootingStar5Switch =false;
    let shootingStar6Switch =false;
    let shootingStar7Switch =false;
    let shootingStar8Switch =false;
    let shootingStar9Switch =false;
    let shootingStar10Switch =false;
    // Light Speed Message
    let lightSpeedMessageJapanese1Switch =false;
    let lightSpeedMessageEnglish1Switch =false;
    let lightSpeedMessageJapanese2Switch =false;
    let lightSpeedMessageEnglish2Switch =false;
    let lightSpeedMessageJapanese3Switch =false;
    let lightSpeedMessageEnglish3Switch =false;
    let lightSpeedMessageJapanese4Switch =false;
    let lightSpeedMessageEnglish4Switch =false;
    let lightSpeedMessageJapanese5Switch =false;
    let lightSpeedMessageEnglish5Switch =false;
    // sky color gradation
    let skyColorGradationSwitch1 =false;
    let skyColorGradationSwitch2 =false;
    let lightSpeedSwitch =false;
    // animate
    const animateAnimated = "animate__animated";
    const animateZoomIn = "animate__zoomIn";
    const animateZoomOut = "animate__zoomOut";
    const animateZoomOutLeft = "animate__zoomOutLeft";
    const animateFlipInX = "animate__flipInX";
    const animateZoomInRight = "animate__zoomInRight";
    const animateFlipOutX = "animate__flipOutX";
    const animateRubberBand = "animate__rubberBand";
    const animateSlower = "animate__slower";
    const animateFadeIn = "animate__fadeIn";
    const animateFadeInRight = "animate__fadeInRight";
    const animateFadeInLeft = "animate__fadeInLeft";
    const animateFadeInLeftBig = "animate__fadeInLeftBig";
    const animateFadeInUp = "animate__fadeInUp";
    const animateFadeOutBottomLeft = "animate__fadeOutBottomLeft";
    const animateFadeInBottomLeft = "animate__fadeInBottomLeft";
    const animateFadeOutTopRight = "animate__fadeOutTopRight";
    const animateFadeInTopRight = "animate__fadeInTopRight";
    const animateFadeOut = "animate__fadeOut";
    const animateJackInTheBox = "animate__jackInTheBox";
    const animateRotateOut = "animate__rotateOut";
    const animateBounceOut = "animate__bounceOut";
    const animateRotateIn = "animate__rotateIn";
    const animateRotateInDownRight = "animate__rotateInDownRight";
    const animateRollIn = "animate__rollIn";

    // sky color and image
    const backgroundUniversePath = "url('./journey_to_the_universe_files/img/background_universe.png')";
    const blueSky = "#A5D6EF";
    const darkBlueSky = "#021443";
    const darkSky = "#000000";
    const whiteSky = "#ffffff";

    // sky gradation point
    let skyGradationPoint1 = 925;
    let skyGradationPoint2 = 925;

    // ***==========*** Events when you scroll! ***==========***
    journeyToTheUniverseScroll.addEventListener("scroll", function() {

        // Rocket launches
        // Get element.
        let rocket = document.getElementById("rocket");
        let space_center = document.getElementById("space_center");

        // Get scroll position.
        let scrollPosition = this.scrollTop;

        // Fire action !!!
        if (firstScrollPosition > scrollPosition) {
            // Change rocket image.
            rocket.src = "./journey_to_the_universe_files/img/rocket_with_fire.png";

            // Change smoke image.
            if ( smokeSwitch === false ){

                // Change smoke1.
                space_center.src = "./journey_to_the_universe_files/img/space_center_with_smoke1.png";

                // Change smoke2.
                window.setTimeout(function(){
                    space_center.src = "./journey_to_the_universe_files/img/space_center_with_smoke2.png";
                }, 1000);

                // Change smoke3.
                window.setTimeout(function(){
                    space_center.src = "./journey_to_the_universe_files/img/space_center_with_smoke3.png";
                }, 2000);

                // Turn on the switch so that the action happens only once.
                smokeSwitch = true;
            }
        } else {
            rocket.src = "./journey_to_the_universe_files/img/rocket.png";
        }

        // ***==========*** musicContainer add animate ***==========***
        // Get musicContainer items.
        let musicContainer = document.getElementById("music_container");
        let musicContainerPosition = musicContainer.offsetTop;

        // musicContainer add css class
        if (musicContainerPosition > scrollPosition) {

            // only one action
            if ( musicContainerSwitch === false ) {
                appearAction(musicContainer, animateZoomIn);
                musicContainerSwitch = true;
            }
        }

        // ***==========*** logo_container add animate ***==========***
        // Get musicContainer items.
        let logoContainer = document.getElementById("logo_container");
        let logoContainerPosition = logoContainer.offsetTop;

        // logoContainer add css class
        if (logoContainerPosition > scrollPosition) {

            // only one action
            if ( logoContainerSwitch === false ) {
                appearAction(logoContainer, animateFadeIn);
                logoContainerSwitch = true;
            }
        }

        // ***==========*** haveANiceJourney_container add animate ***==========***
        // Get musicContainer items.
        let haveANiceJourneyContainer = document.getElementById("have_a_nice_journey_container");
        let haveANiceJourneyContainerPosition = haveANiceJourneyContainer.offsetTop;

        // logoContainer add css class
        if (haveANiceJourneyContainerPosition > scrollPosition) {

            // only one action
            if ( haveANiceJourneySwitch === false ) {
                appearAction(haveANiceJourneyContainer, animateRubberBand);
                haveANiceJourneyContainer.classList.add("animate__slower");
                haveANiceJourneySwitch = true;
            }
        }

        // ***==========*** Everest add animate ***==========***
        // Get title items.
        let everestTitleJapanese = document.getElementById("everest_title_japanese");
        let everestTitleJapanesePosition = everestTitleJapanese.offsetTop;
        let everestTitleEnglish = document.getElementById("everest_title_english");
        let everestTitleEnglishPosition = everestTitleEnglish.offsetTop;
        let everestDistance = document.getElementById("everest_distance");
        let everestDistancePosition = everestDistance.offsetTop;
        let everestSentenceJapanese = document.getElementById("everest_sentence_japanese");
        let everestSentenceJapanesePosition = everestSentenceJapanese.offsetTop;
        let everestSentenceEnglish = document.getElementById("everest_sentence_english");
        let everestSentenceEnglishPosition = everestSentenceEnglish.offsetTop;

        // add css class
        if (everestTitleJapanesePosition > scrollPosition) {

            // only one action
            if (everestTitleJapaneseSwitch === false ) {
                appearAction(everestTitleJapanese, animateFadeInRight);
                everestTitleJapaneseSwitch = true;
            }
        }

        // add css class
        if (everestTitleEnglishPosition > scrollPosition) {

            // only one action
            if ( everestTitleEnglishSwitch === false ) {
                appearAction(everestTitleEnglish, animateFadeInRight);
                everestTitleEnglishSwitch = true;
            }
        }

        // add css class
        if (everestDistancePosition > scrollPosition) {

            // only one action
            if ( everestDistanceSwitch === false ) {
                appearAction(everestDistance, animateFadeInRight);
                everestDistanceSwitch = true;
            }
        }

        // add css class
        if (everestSentenceJapanesePosition > scrollPosition) {

            // only one action
            if ( everestSentenceJapaneseSwitch === false ) {
                appearAction(everestSentenceJapanese, animateFadeInRight);
                everestSentenceJapaneseSwitch = true;
            }
        }
        // add css class
        if (everestSentenceEnglishPosition > scrollPosition) {
            // only one action
            if ( everestSentenceEnglishSwitch === false ) {
                appearAction(everestSentenceEnglish, animateFadeInRight);
                everestSentenceEnglishSwitch = true;
            }
        }
        // ***==========*** plane add animate ***==========***
        // Get title items.
        let planeImg = document.getElementById("plane_img");
        let planeImgPosition = planeImg.offsetTop;
        let planeTitleJapanese = document.getElementById("plane_title_japanese");
        let planeTitleJapanesePosition = planeTitleJapanese.offsetTop;
        let planeTitleEnglish = document.getElementById("plane_title_english");
        let planeTitleEnglishPosition = planeTitleEnglish.offsetTop;
        let planeDistance = document.getElementById("plane_distance");
        let planeDistancePosition = planeDistance.offsetTop;
        let planeSentenceJapanese = document.getElementById("plane_sentence_japanese");
        let planeSentenceJapanesePosition = planeSentenceJapanese.offsetTop;
        let planeSentenceEnglish = document.getElementById("plane_sentence_english");
        let planeSentenceEnglishPosition = planeSentenceEnglish.offsetTop;
        // add css class
        if (planeImgPosition > scrollPosition) {
            // only one action
            if ( planeImgSwitch === false ) {
                appearAction(planeImg, animateFadeInLeftBig);
                planeImgSwitch = true;
            }
        }
        // add css class
        if (planeTitleJapanesePosition > scrollPosition) {
            // only one action
            if ( planeTitleJapaneseSwitch === false ) {
                appearAction(planeTitleJapanese, animateFadeInLeft);
                planeTitleJapaneseSwitch = true;
            }
        }
        // add css class
        if (planeTitleEnglishPosition > scrollPosition) {
            // only one action
            if ( planeTitleEnglishSwitch === false ) {
                appearAction(planeTitleEnglish, animateFadeInLeft);
                planeTitleEnglishSwitch = true;
            }
        }
        // add css class
        if (planeDistancePosition > scrollPosition) {
            // only one action
            if ( planeDistanceSwitch === false ) {
                appearAction(planeDistance, animateFadeInLeft);
                planeDistanceSwitch = true;
            }
        }
        // add css class
        if (planeSentenceJapanesePosition > scrollPosition) {
            // only one action
            if ( planeSentenceJapaneseSwitch === false ) {
                appearAction(planeSentenceJapanese, animateFadeInLeft);
                planeSentenceJapaneseSwitch = true;
            }
        }
        // add css class
        if (planeSentenceEnglishPosition > scrollPosition) {
            // only one action
            if ( planeSentenceEnglishSwitch === false ) {
                appearAction(planeSentenceEnglish, animateFadeInLeft);
                planeSentenceEnglishSwitch = true;
            }
        }
        // ***==========*** getting dark add animate ***==========***
        let skyColorGradation1         = document.getElementById("sky_color_gradation_1");
        let skyColorGradationPosition1 = skyColorGradation1.offsetTop;
        // When through the "sky_color_gradation", change the sky color.
        if (skyColorGradationPosition1 > scrollPosition) {
            if ( skyColorGradationSwitch1 === false ) {
                journeyToTheUniverseScroll.style.backgroundColor = darkBlueSky;
                journeyToTheUniverseScroll.style.backgroundImage = backgroundUniversePath;
                skyColorGradationSwitch1 = true;
            }
        }
        // When through the "sky_color_gradation", change the sky color.
        if (skyColorGradationPosition1 < scrollPosition) {
            if ( skyColorGradationSwitch1 === true ) {
                journeyToTheUniverseScroll.style.backgroundColor = blueSky;
                journeyToTheUniverseScroll.style.backgroundImage = null;
                skyColorGradationSwitch1 = false;
            }
        }
        // ***==========*** aurora add animate ***==========***
        // Get title items.
        let auroraTitleJapanese = document.getElementById("aurora_title_japanese");
        let auroraTitleJapanesePosition = auroraTitleJapanese.offsetTop;
        let auroraTitleEnglish = document.getElementById("aurora_title_english");
        let auroraTitleEnglishPosition = auroraTitleEnglish.offsetTop;
        let auroraDistance = document.getElementById("aurora_distance");
        let auroraDistancePosition = auroraDistance.offsetTop;
        let auroraSentenceJapanese = document.getElementById("aurora_sentence_japanese");
        let auroraSentenceJapanesePosition = auroraSentenceJapanese.offsetTop;
        let auroraSentenceEnglish = document.getElementById("aurora_sentence_english");
        let auroraSentenceEnglishPosition = auroraSentenceEnglish.offsetTop;
        // add css class
        if (auroraTitleJapanesePosition > scrollPosition) {
            // only one action
            if ( auroraTitleJapaneseSwitch === false ) {
                appearAction(auroraTitleJapanese, animateFadeInRight);
                auroraTitleJapaneseSwitch = true;
            }
        }
        // add css class
        if (auroraTitleEnglishPosition > scrollPosition) {
            // only one action
            if ( auroraTitleEnglishSwitch === false ) {
                appearAction(auroraTitleEnglish, animateFadeInRight);
                auroraTitleEnglishSwitch = true;
            }
        }
        // add css class
        if (auroraDistancePosition > scrollPosition) {
            // only one action
            if ( auroraDistanceSwitch === false ) {
                appearAction(auroraDistance, animateFadeInRight);
                auroraDistanceSwitch = true;
            }
        }
        // add css class
        if (auroraSentenceJapanesePosition > scrollPosition) {
            // only one action
            if ( auroraSentenceJapaneseSwitch === false ) {
                appearAction(auroraSentenceJapanese, animateFadeInRight);
                auroraSentenceJapaneseSwitch = true;
            }
        }
        // add css class
        if (auroraSentenceEnglishPosition > scrollPosition) {
            // only one action
            if ( auroraSentenceEnglishSwitch === false ) {
                appearAction(auroraSentenceEnglish, animateFadeInRight);
                auroraSentenceEnglishSwitch = true;
            }
        }
        // ***==========*** International Space Station (ISS) add animate ***==========***
        // Get title items.
        let issImg = document.getElementById("iss_img");
        let issImgPosition = issImg.offsetTop;
        let issTitleJapanese = document.getElementById("iss_title_japanese");
        let issTitleJapanesePosition = issTitleJapanese.offsetTop;
        let issTitleEnglish = document.getElementById("iss_title_english");
        let issTitleEnglishPosition = issTitleEnglish.offsetTop;
        let issDistance = document.getElementById("iss_distance");
        let issDistancePosition = issDistance.offsetTop;
        let issSentenceJapanese = document.getElementById("iss_sentence_japanese");
        let issSentenceJapanesePosition = issSentenceJapanese.offsetTop;
        let issSentenceEnglish = document.getElementById("iss_sentence_english");
        let issSentenceEnglishPosition = issSentenceEnglish.offsetTop;
        // add css class
        if (issImgPosition > scrollPosition) {
            // only one action
            if ( issImgSwitch === false ) {
                appearAction(issImg, animateFadeIn);
                issImg.classList.add("animate__slower");
                issImgSwitch = true;
            }
        }
        // add css class
        if (issTitleJapanesePosition > scrollPosition) {
            // only one action
            if ( issTitleJapaneseSwitch === false ) {
                appearAction(issTitleJapanese, animateFadeInLeft);
                issTitleJapaneseSwitch = true;
            }
        }
        // add css class
        if (issTitleEnglishPosition > scrollPosition) {
            // only one action
            if ( issTitleEnglishSwitch === false ) {
                appearAction(issTitleEnglish, animateFadeInLeft);
                issTitleEnglishSwitch = true;
            }
        }
        // add css class
        if (issDistancePosition > scrollPosition) {
            // only one action
            if ( issDistanceSwitch === false ) {
                appearAction(issDistance, animateFadeInLeft);
                issDistanceSwitch = true;
            }
        }
        // add css class
        if (issSentenceJapanesePosition > scrollPosition) {
            // only one action
            if ( issSentenceJapaneseSwitch === false ) {
                appearAction(issSentenceJapanese, animateFadeInLeft);
                issSentenceJapaneseSwitch = true;
            }
        }
        // add css class
        if (issSentenceEnglishPosition > scrollPosition) {
            // only one action
            if ( issSentenceEnglishSwitch === false ) {
                appearAction(issSentenceEnglish, animateFadeInLeft);
                issSentenceEnglishSwitch = true;
            }
        }
        // ***==========*** getting dark add animate ***==========***
        let skyColorGradation2         = document.getElementById("sky_color_gradation_2");
        let skyColorGradationPosition2 = skyColorGradation2.offsetTop;
        // When through the "sky_color_gradation", change the sky color.
        if (skyColorGradationPosition2 > scrollPosition) {
            if ( skyColorGradationSwitch2 === false ) {
                journeyToTheUniverseScroll.style.backgroundColor = darkSky;
                skyColorGradationSwitch2 = true;
            }
        }
        // When through the "sky_color_gradation", change the sky color.
        if (skyColorGradationPosition2 < scrollPosition) {
            if ( skyColorGradationSwitch2 === true ) {
                journeyToTheUniverseScroll.style.backgroundColor = darkBlueSky;
                skyColorGradationSwitch2 = false;
            }
        }
        // ***==========*** moon add animate ***==========***
        // Get title items.
        let moonTitleJapanese = document.getElementById("moon_title_japanese");
        let moonTitleJapanesePosition = moonTitleJapanese.offsetTop;
        let moonTitleEnglish = document.getElementById("moon_title_english");
        let moonTitleEnglishPosition = moonTitleEnglish.offsetTop;
        let moonDistance = document.getElementById("moon_distance");
        let moonDistancePosition = moonDistance.offsetTop;
        let moonSentenceJapanese = document.getElementById("moon_sentence_japanese");
        let moonSentenceJapanesePosition = moonSentenceJapanese.offsetTop;
        let moonSentenceEnglish = document.getElementById("moon_sentence_english");
        let moonSentenceEnglishPosition = moonSentenceEnglish.offsetTop;
        // add css class
        if (moonTitleJapanesePosition > scrollPosition) {
            // only one action
            if ( moonTitleJapaneseSwitch === false ) {
                appearAction(moonTitleJapanese, animateFadeInRight);
                moonTitleJapaneseSwitch = true;
            }
        }
        // add css class
        if (moonTitleEnglishPosition > scrollPosition) {
            // only one action
            if ( moonTitleEnglishSwitch === false ) {
                appearAction(moonTitleEnglish, animateFadeInRight);
                moonTitleEnglishSwitch = true;
            }
        }
        // add css class
        if (moonDistancePosition > scrollPosition) {
            // only one action
            if ( moonDistanceSwitch === false ) {
                appearAction(moonDistance, animateFadeInRight);
                moonDistanceSwitch = true;
            }
        }
        // add css class
        if (moonSentenceJapanesePosition > scrollPosition) {
            // only one action
            if ( moonSentenceJapaneseSwitch === false ) {
                appearAction(moonSentenceJapanese, animateFadeInRight);
                moonSentenceJapaneseSwitch = true;
            }
        }
        // add css class
        if (moonSentenceEnglishPosition > scrollPosition) {
            // only one action
            if ( moonSentenceEnglishSwitch === false ) {
                appearAction(moonSentenceEnglish, animateFadeInRight);
                moonSentenceEnglishSwitch = true;
            }
        }
        // ***==========*** Venus add animate ***==========***
        // Get title items.
        let venusTitleJapanese = document.getElementById("venus_title_japanese");
        let venusTitleJapanesePosition = venusTitleJapanese.offsetTop;
        let venusTitleEnglish = document.getElementById("venus_title_english");
        let venusTitleEnglishPosition = venusTitleEnglish.offsetTop;
        let venusDistance = document.getElementById("venus_distance");
        let venusDistancePosition = venusDistance.offsetTop;
        let venusSentenceJapanese = document.getElementById("venus_sentence_japanese");
        let venusSentenceJapanesePosition = venusSentenceJapanese.offsetTop;
        let venusSentenceEnglish = document.getElementById("venus_sentence_english");
        let venusSentenceEnglishPosition = venusSentenceEnglish.offsetTop;
        // add css class
        if (venusTitleJapanesePosition > scrollPosition) {
            // only one action
            if ( venusTitleJapaneseSwitch === false ) {
                appearAction(venusTitleJapanese, animateFadeInLeft);
                venusTitleJapaneseSwitch = true;
            }
        }
        // add css class
        if (venusTitleEnglishPosition > scrollPosition) {
            // only one action
            if ( venusTitleEnglishSwitch === false ) {
                appearAction(venusTitleEnglish, animateFadeInLeft);
                venusTitleEnglishSwitch = true;
            }
        }
        // add css class
        if (venusDistancePosition > scrollPosition) {
            // only one action
            if ( venusDistanceSwitch === false ) {
                appearAction(venusDistance, animateFadeInLeft);
                venusDistanceSwitch = true;
            }
        }
        // add css class
        if (venusSentenceJapanesePosition > scrollPosition) {
            // only one action
            if ( venusSentenceJapaneseSwitch === false ) {
                appearAction(venusSentenceJapanese, animateFadeInLeft);
                venusSentenceJapaneseSwitch = true;
            }
        }
        // add css class
        if (venusSentenceEnglishPosition > scrollPosition) {
            // only one action
            if ( venusSentenceEnglishSwitch === false ) {
                appearAction(venusSentenceEnglish, animateFadeInLeft);
                venusSentenceEnglishSwitch = true;
            }
        }
        // ***==========*** mars add animate ***==========***
        // Get title items.
        let marsTitleJapanese = document.getElementById("mars_title_japanese");
        let marsTitleJapanesePosition = marsTitleJapanese.offsetTop;
        let marsTitleEnglish = document.getElementById("mars_title_english");
        let marsTitleEnglishPosition = marsTitleEnglish.offsetTop;
        let marsDistance = document.getElementById("mars_distance");
        let marsDistancePosition = marsDistance.offsetTop;
        let marsSentenceJapanese = document.getElementById("mars_sentence_japanese");
        let marsSentenceJapanesePosition = marsSentenceJapanese.offsetTop;
        let marsSentenceEnglish = document.getElementById("mars_sentence_english");
        let marsSentenceEnglishPosition = marsSentenceEnglish.offsetTop;
        // add css class
        if (marsTitleJapanesePosition > scrollPosition) {
            // only one action
            if ( marsTitleJapaneseSwitch === false ) {
                appearAction(marsTitleJapanese, animateFadeInRight);
                marsTitleJapaneseSwitch = true;
            }
        }
        // add css class
        if (marsTitleEnglishPosition > scrollPosition) {
            // only one action
            if ( marsTitleEnglishSwitch === false ) {
                appearAction(marsTitleEnglish, animateFadeInRight);
                marsTitleEnglishSwitch = true;
            }
        }
        // add css class
        if (marsDistancePosition > scrollPosition) {
            // only one action
            if ( marsDistanceSwitch === false ) {
                appearAction(marsDistance, animateFadeInRight);
                marsDistanceSwitch = true;
            }
        }
        // add css class
        if (marsSentenceJapanesePosition > scrollPosition) {
            // only one action
            if ( marsSentenceJapaneseSwitch === false ) {
                appearAction(marsSentenceJapanese, animateFadeInRight);
                marsSentenceJapaneseSwitch = true;
            }
        }
        // add css class
        if (marsSentenceEnglishPosition > scrollPosition) {
            // only one action
            if ( marsSentenceEnglishSwitch === false ) {
                appearAction(marsSentenceEnglish, animateFadeInRight);
                marsSentenceEnglishSwitch = true;
            }
        }
        // ***==========*** Mercury add animate ***==========***
        // Get title items.
        let mercuryTitleJapanese = document.getElementById("mercury_title_japanese");
        let mercuryTitleJapanesePosition = mercuryTitleJapanese.offsetTop;
        let mercuryTitleEnglish = document.getElementById("mercury_title_english");
        let mercuryTitleEnglishPosition = mercuryTitleEnglish.offsetTop;
        let mercuryDistance = document.getElementById("mercury_distance");
        let mercuryDistancePosition = mercuryDistance.offsetTop;
        let mercurySentenceJapanese = document.getElementById("mercury_sentence_japanese");
        let mercurySentenceJapanesePosition = mercurySentenceJapanese.offsetTop;
        let mercurySentenceEnglish = document.getElementById("mercury_sentence_english");
        let mercurySentenceEnglishPosition = mercurySentenceEnglish.offsetTop;
        // add css class
        if (mercuryTitleJapanesePosition > scrollPosition) {
            // only one action
            if ( mercuryTitleJapaneseSwitch === false ) {
                appearAction(mercuryTitleJapanese, animateFadeInLeft);
                mercuryTitleJapaneseSwitch = true;
            }
        }
        // add css class
        if (mercuryTitleEnglishPosition > scrollPosition) {
            // only one action
            if ( mercuryTitleEnglishSwitch === false ) {
                appearAction(mercuryTitleEnglish, animateFadeInLeft);
                mercuryTitleEnglishSwitch = true;
            }
        }
        // add css class
        if (mercuryDistancePosition > scrollPosition) {
            // only one action
            if ( mercuryDistanceSwitch === false ) {
                appearAction(mercuryDistance, animateFadeInLeft);
                mercuryDistanceSwitch = true;
            }
        }
        // add css class
        if (mercurySentenceJapanesePosition > scrollPosition) {
            // only one action
            if ( mercurySentenceJapaneseSwitch === false ) {
                appearAction(mercurySentenceJapanese, animateFadeInLeft);
                mercurySentenceJapaneseSwitch = true;
            }
        }
        // add css class
        if (mercurySentenceEnglishPosition > scrollPosition) {
            // only one action
            if ( mercurySentenceEnglishSwitch === false ) {
                appearAction(mercurySentenceEnglish, animateFadeInLeft);
                mercurySentenceEnglishSwitch = true;
            }
        }
        // ***==========*** sun add animate ***==========***
        // Get title items.
        let sunTitleJapanese = document.getElementById("sun_title_japanese");
        let sunTitleJapanesePosition = sunTitleJapanese.offsetTop;
        let sunTitleEnglish = document.getElementById("sun_title_english");
        let sunTitleEnglishPosition = sunTitleEnglish.offsetTop;
        let sunDistance = document.getElementById("sun_distance");
        let sunDistancePosition = sunDistance.offsetTop;
        let sunSentenceJapanese = document.getElementById("sun_sentence_japanese");
        let sunSentenceJapanesePosition = sunSentenceJapanese.offsetTop;
        let sunSentenceEnglish = document.getElementById("sun_sentence_english");
        let sunSentenceEnglishPosition = sunSentenceEnglish.offsetTop;
        // add css class
        if (sunTitleJapanesePosition > scrollPosition) {
            // only one action
            if ( sunTitleJapaneseSwitch === false ) {
                appearAction(sunTitleJapanese, animateFadeInRight);
                sunTitleJapaneseSwitch = true;
            }
        }
        // add css class
        if (sunTitleEnglishPosition > scrollPosition) {
            // only one action
            if ( sunTitleEnglishSwitch === false ) {
                appearAction(sunTitleEnglish, animateFadeInRight);
                sunTitleEnglishSwitch = true;
            }
        }
        // add css class
        if (sunDistancePosition > scrollPosition) {
            // only one action
            if ( sunDistanceSwitch === false ) {
                appearAction(sunDistance, animateFadeInRight);
                sunDistanceSwitch = true;
            }
        }
        // add css class
        if (sunSentenceJapanesePosition > scrollPosition) {
            // only one action
            if ( sunSentenceJapaneseSwitch === false ) {
                appearAction(sunSentenceJapanese, animateFadeInRight);
                sunSentenceJapaneseSwitch = true;
            }
        }
        // add css class
        if (sunSentenceEnglishPosition > scrollPosition) {
            // only one action
            if ( sunSentenceEnglishSwitch === false ) {
                appearAction(sunSentenceEnglish, animateFadeInRight);
                sunSentenceEnglishSwitch = true;
            }
        }
        // ***==========*** Jupiter add animate ***==========***
        // Get title items.
        let jupiterTitleJapanese = document.getElementById("jupiter_title_japanese");
        let jupiterTitleJapanesePosition = jupiterTitleJapanese.offsetTop;
        let jupiterTitleEnglish = document.getElementById("jupiter_title_english");
        let jupiterTitleEnglishPosition = jupiterTitleEnglish.offsetTop;
        let jupiterDistance = document.getElementById("jupiter_distance");
        let jupiterDistancePosition = jupiterDistance.offsetTop;
        let jupiterSentenceJapanese = document.getElementById("jupiter_sentence_japanese");
        let jupiterSentenceJapanesePosition = jupiterSentenceJapanese.offsetTop;
        let jupiterSentenceEnglish = document.getElementById("jupiter_sentence_english");
        let jupiterSentenceEnglishPosition = jupiterSentenceEnglish.offsetTop;
        // add css class
        if (jupiterTitleJapanesePosition > scrollPosition) {
            // only one action
            if ( jupiterTitleJapaneseSwitch === false ) {
                appearAction(jupiterTitleJapanese, animateFadeInLeft);
                jupiterTitleJapaneseSwitch = true;
            }
        }
        // add css class
        if (jupiterTitleEnglishPosition > scrollPosition) {
            // only one action
            if ( jupiterTitleEnglishSwitch === false ) {
                appearAction(jupiterTitleEnglish, animateFadeInLeft);
                jupiterTitleEnglishSwitch = true;
            }
        }
        // add css class
        if (jupiterDistancePosition > scrollPosition) {
            // only one action
            if ( jupiterDistanceSwitch === false ) {
                appearAction(jupiterDistance, animateFadeInLeft);
                jupiterDistanceSwitch = true;
            }
        }
        // add css class
        if (jupiterSentenceJapanesePosition > scrollPosition) {
            // only one action
            if ( jupiterSentenceJapaneseSwitch === false ) {
                appearAction(jupiterSentenceJapanese, animateFadeInLeft);
                jupiterSentenceJapaneseSwitch = true;
            }
        }
        // add css class
        if (jupiterSentenceEnglishPosition > scrollPosition) {
            // only one action
            if ( jupiterSentenceEnglishSwitch === false ) {
                appearAction(jupiterSentenceEnglish, animateFadeInLeft);
                jupiterSentenceEnglishSwitch = true;
            }
        }
        // ***==========*** saturn add animate ***==========***
        // Get title items.
        let saturnTitleJapanese = document.getElementById("saturn_title_japanese");
        let saturnTitleJapanesePosition = saturnTitleJapanese.offsetTop;
        let saturnTitleEnglish = document.getElementById("saturn_title_english");
        let saturnTitleEnglishPosition = saturnTitleEnglish.offsetTop;
        let saturnDistance = document.getElementById("saturn_distance");
        let saturnDistancePosition = saturnDistance.offsetTop;
        let saturnSentenceJapanese = document.getElementById("saturn_sentence_japanese");
        let saturnSentenceJapanesePosition = saturnSentenceJapanese.offsetTop;
        let saturnSentenceEnglish = document.getElementById("saturn_sentence_english");
        let saturnSentenceEnglishPosition = saturnSentenceEnglish.offsetTop;
        // add css class
        if (saturnTitleJapanesePosition > scrollPosition) {
            // only one action
            if ( saturnTitleJapaneseSwitch === false ) {
                appearAction(saturnTitleJapanese, animateFadeInRight);
                saturnTitleJapaneseSwitch = true;
            }
        }
        // add css class
        if (saturnTitleEnglishPosition > scrollPosition) {
            // only one action
            if ( saturnTitleEnglishSwitch === false ) {
                appearAction(saturnTitleEnglish, animateFadeInRight);
                saturnTitleEnglishSwitch = true;
            }
        }
        // add css class
        if (saturnDistancePosition > scrollPosition) {
            // only one action
            if ( saturnDistanceSwitch === false ) {
                appearAction(saturnDistance, animateFadeInRight);
                saturnDistanceSwitch = true;
            }
        }
        // add css class
        if (saturnSentenceJapanesePosition > scrollPosition) {
            // only one action
            if ( saturnSentenceJapaneseSwitch === false ) {
                appearAction(saturnSentenceJapanese, animateFadeInRight);
                saturnSentenceJapaneseSwitch = true;
            }
        }
        // add css class
        if (saturnSentenceEnglishPosition > scrollPosition) {
            // only one action
            if ( saturnSentenceEnglishSwitch === false ) {
                appearAction(saturnSentenceEnglish, animateFadeInRight);
                saturnSentenceEnglishSwitch = true;
            }
        }
        // ***==========*** Uranus add animate ***==========***
        // Get title items.
        let uranusTitleJapanese = document.getElementById("uranus_title_japanese");
        let uranusTitleJapanesePosition = uranusTitleJapanese.offsetTop;
        let uranusTitleEnglish = document.getElementById("uranus_title_english");
        let uranusTitleEnglishPosition = uranusTitleEnglish.offsetTop;
        let uranusDistance = document.getElementById("uranus_distance");
        let uranusDistancePosition = uranusDistance.offsetTop;
        let uranusSentenceJapanese = document.getElementById("uranus_sentence_japanese");
        let uranusSentenceJapanesePosition = uranusSentenceJapanese.offsetTop;
        let uranusSentenceEnglish = document.getElementById("uranus_sentence_english");
        let uranusSentenceEnglishPosition = uranusSentenceEnglish.offsetTop;
        // add css class
        if (uranusTitleJapanesePosition > scrollPosition) {
            // only one action
            if ( uranusTitleJapaneseSwitch === false ) {
                appearAction(uranusTitleJapanese, animateFadeInLeft);
                uranusTitleJapaneseSwitch = true;
            }
        }
        // add css class
        if (uranusTitleEnglishPosition > scrollPosition) {
            // only one action
            if ( uranusTitleEnglishSwitch === false ) {
                appearAction(uranusTitleEnglish, animateFadeInLeft);
                uranusTitleEnglishSwitch = true;
            }
        }
        // add css class
        if (uranusDistancePosition > scrollPosition) {
            // only one action
            if ( uranusDistanceSwitch === false ) {
                appearAction(uranusDistance, animateFadeInLeft);
                uranusDistanceSwitch = true;
            }
        }
        // add css class
        if (uranusSentenceJapanesePosition > scrollPosition) {
            // only one action
            if ( uranusSentenceJapaneseSwitch === false ) {
                appearAction(uranusSentenceJapanese, animateFadeInLeft);
                uranusSentenceJapaneseSwitch = true;
            }
        }
        // add css class
        if (uranusSentenceEnglishPosition > scrollPosition) {
            // only one action
            if ( uranusSentenceEnglishSwitch === false ) {
                appearAction(uranusSentenceEnglish, animateFadeInLeft);
                uranusSentenceEnglishSwitch = true;
            }
        }
        // ***==========*** neptune add animate ***==========***
        // Get title items.
        let neptuneTitleJapanese = document.getElementById("neptune_title_japanese");
        let neptuneTitleJapanesePosition = neptuneTitleJapanese.offsetTop;
        let neptuneTitleEnglish = document.getElementById("neptune_title_english");
        let neptuneTitleEnglishPosition = neptuneTitleEnglish.offsetTop;
        let neptuneDistance = document.getElementById("neptune_distance");
        let neptuneDistancePosition = neptuneDistance.offsetTop;
        let neptuneSentenceJapanese = document.getElementById("neptune_sentence_japanese");
        let neptuneSentenceJapanesePosition = neptuneSentenceJapanese.offsetTop;
        let neptuneSentenceEnglish = document.getElementById("neptune_sentence_english");
        let neptuneSentenceEnglishPosition = neptuneSentenceEnglish.offsetTop;
        // add css class
        if (neptuneTitleJapanesePosition > scrollPosition) {
            // only one action
            if ( neptuneTitleJapaneseSwitch === false ) {
                appearAction(neptuneTitleJapanese, animateFadeInRight);
                neptuneTitleJapaneseSwitch = true;
            }
        }
        // add css class
        if (neptuneTitleEnglishPosition > scrollPosition) {
            // only one action
            if ( neptuneTitleEnglishSwitch === false ) {
                appearAction(neptuneTitleEnglish, animateFadeInRight);
                neptuneTitleEnglishSwitch = true;
            }
        }
        // add css class
        if (neptuneDistancePosition > scrollPosition) {
            // only one action
            if ( neptuneDistanceSwitch === false ) {
                appearAction(neptuneDistance, animateFadeInRight);
                neptuneDistanceSwitch = true;
            }
        }
        // add css class
        if (neptuneSentenceJapanesePosition > scrollPosition) {
            // only one action
            if ( neptuneSentenceJapaneseSwitch === false ) {
                appearAction(neptuneSentenceJapanese, animateFadeInRight);
                neptuneSentenceJapaneseSwitch = true;
            }
        }
        // add css class
        if (neptuneSentenceEnglishPosition > scrollPosition) {
            // only one action
            if ( neptuneSentenceEnglishSwitch === false ) {
                appearAction(neptuneSentenceEnglish, animateFadeInRight);
                saturnSentenceEnglishSwitch = true;
            }
        }
        // ***==========*** Pluto add animate ***==========***
        // Get title items.
        let plutoTitleJapanese = document.getElementById("pluto_title_japanese");
        let plutoTitleJapanesePosition = plutoTitleJapanese.offsetTop;
        let plutoTitleEnglish = document.getElementById("pluto_title_english");
        let plutoTitleEnglishPosition = plutoTitleEnglish.offsetTop;
        let plutoDistance = document.getElementById("pluto_distance");
        let plutoDistancePosition = plutoDistance.offsetTop;
        let plutoSentenceJapanese = document.getElementById("pluto_sentence_japanese");
        let plutoSentenceJapanesePosition = plutoSentenceJapanese.offsetTop;
        let plutoSentenceEnglish = document.getElementById("pluto_sentence_english");
        let plutoSentenceEnglishPosition = plutoSentenceEnglish.offsetTop;
        // add css class
        if (plutoTitleJapanesePosition > scrollPosition) {
            // only one action
            if ( plutoTitleJapaneseSwitch === false ) {
                appearAction(plutoTitleJapanese, animateFadeInLeft);
                plutoTitleJapaneseSwitch = true;
            }
        }
        // add css class
        if (plutoTitleEnglishPosition > scrollPosition) {
            // only one action
            if ( plutoTitleEnglishSwitch === false ) {
                appearAction(plutoTitleEnglish, animateFadeInLeft);
                plutoTitleEnglishSwitch = true;
            }
        }
        // add css class
        if (plutoDistancePosition > scrollPosition) {
            // only one action
            if ( plutoDistanceSwitch === false ) {
                appearAction(plutoDistance, animateFadeInLeft);
                plutoDistanceSwitch = true;
            }
        }
        // add css class
        if (plutoSentenceJapanesePosition > scrollPosition) {
            // only one action
            if ( plutoSentenceJapaneseSwitch === false ) {
                appearAction(plutoSentenceJapanese, animateFadeInLeft);
                plutoSentenceJapaneseSwitch = true;
            }
        }
        // add css class
        if (plutoSentenceEnglishPosition > scrollPosition) {
            // only one action
            if ( plutoSentenceEnglishSwitch === false ) {
                appearAction(plutoSentenceEnglish, animateFadeInLeft);
                plutoSentenceEnglishSwitch = true;
            }
        }
        // ***==========*** Haumea add animate ***==========***
        // Get title items.
        let haumeaTitleJapanese = document.getElementById("haumea_title_japanese");
        let haumeaTitleJapanesePosition = haumeaTitleJapanese.offsetTop;
        let haumeaTitleEnglish = document.getElementById("haumea_title_english");
        let haumeaTitleEnglishPosition = haumeaTitleEnglish.offsetTop;
        let haumeaDistance = document.getElementById("haumea_distance");
        let haumeaDistancePosition = haumeaDistance.offsetTop;
        let haumeaSentenceJapanese = document.getElementById("haumea_sentence_japanese");
        let haumeaSentenceJapanesePosition = haumeaSentenceJapanese.offsetTop;
        let haumeaSentenceEnglish = document.getElementById("haumea_sentence_english");
        let haumeaSentenceEnglishPosition = haumeaSentenceEnglish.offsetTop;
        // add css class
        if (haumeaTitleJapanesePosition > scrollPosition) {
            // only one action
            if ( haumeaTitleJapaneseSwitch === false ) {
                appearAction(haumeaTitleJapanese, animateFadeInRight);
                haumeaTitleJapaneseSwitch = true;
            }
        }
        // add css class
        if (haumeaTitleEnglishPosition > scrollPosition) {
            // only one action
            if ( haumeaTitleEnglishSwitch === false ) {
                appearAction(haumeaTitleEnglish, animateFadeInRight);
                haumeaTitleEnglishSwitch = true;
            }
        }
        // add css class
        if (haumeaDistancePosition > scrollPosition) {
            // only one action
            if ( haumeaDistanceSwitch === false ) {
                appearAction(haumeaDistance, animateFadeInRight);
                haumeaDistanceSwitch = true;
            }
        }
        // add css class
        if (haumeaSentenceJapanesePosition > scrollPosition) {
            // only one action
            if ( haumeaSentenceJapaneseSwitch === false ) {
                appearAction(haumeaSentenceJapanese, animateFadeInRight);
                haumeaSentenceJapaneseSwitch = true;
            }
        }
        // add css class
        if (haumeaSentenceEnglishPosition > scrollPosition) {
            // only one action
            if ( haumeaSentenceEnglishSwitch === false ) {
                appearAction(haumeaSentenceEnglish, animateFadeInRight);
                saturnSentenceEnglishSwitch = true;
            }
        }
        // ***==========*** Makemake add animate ***==========***
        // Get title items.
        let makemakeTitleJapanese = document.getElementById("makemake_title_japanese");
        let makemakeTitleJapanesePosition = makemakeTitleJapanese.offsetTop;
        let makemakeTitleEnglish = document.getElementById("makemake_title_english");
        let makemakeTitleEnglishPosition = makemakeTitleEnglish.offsetTop;
        let makemakeDistance = document.getElementById("makemake_distance");
        let makemakeDistancePosition = makemakeDistance.offsetTop;
        let makemakeSentenceJapanese = document.getElementById("makemake_sentence_japanese");
        let makemakeSentenceJapanesePosition = makemakeSentenceJapanese.offsetTop;
        let makemakeSentenceEnglish = document.getElementById("makemake_sentence_english");
        let makemakeSentenceEnglishPosition = makemakeSentenceEnglish.offsetTop;
        // add css class
        if (makemakeTitleJapanesePosition > scrollPosition) {
            // only one action
            if ( makemakeTitleJapaneseSwitch === false ) {
                appearAction(makemakeTitleJapanese, animateFadeInLeft);
                makemakeTitleJapaneseSwitch = true;
            }
        }
        // add css class
        if (makemakeTitleEnglishPosition > scrollPosition) {
            // only one action
            if ( makemakeTitleEnglishSwitch === false ) {
                appearAction(makemakeTitleEnglish, animateFadeInLeft);
                makemakeTitleEnglishSwitch = true;
            }
        }
        // add css class
        if (makemakeDistancePosition > scrollPosition) {
            // only one action
            if ( makemakeDistanceSwitch === false ) {
                appearAction(makemakeDistance, animateFadeInLeft);
                makemakeDistanceSwitch = true;
            }
        }
        // add css class
        if (makemakeSentenceJapanesePosition > scrollPosition) {
            // only one action
            if ( makemakeSentenceJapaneseSwitch === false ) {
                appearAction(makemakeSentenceJapanese, animateFadeInLeft);
                makemakeSentenceJapaneseSwitch = true;
            }
        }
        // add css class
        if (makemakeSentenceEnglishPosition > scrollPosition) {
            // only one action
            if ( makemakeSentenceEnglishSwitch === false ) {
                appearAction(makemakeSentenceEnglish, animateFadeInLeft);
                makemakeSentenceEnglishSwitch = true;
            }
        }
        // ***==========*** Eris add animate ***==========***
        // Get title items.
        let erisTitleJapanese = document.getElementById("eris_title_japanese");
        let erisTitleJapanesePosition = erisTitleJapanese.offsetTop;
        let erisTitleEnglish = document.getElementById("eris_title_english");
        let erisTitleEnglishPosition = erisTitleEnglish.offsetTop;
        let erisDistance = document.getElementById("eris_distance");
        let erisDistancePosition = erisDistance.offsetTop;
        let erisSentenceJapanese = document.getElementById("eris_sentence_japanese");
        let erisSentenceJapanesePosition = erisSentenceJapanese.offsetTop;
        let erisSentenceEnglish = document.getElementById("eris_sentence_english");
        let erisSentenceEnglishPosition = erisSentenceEnglish.offsetTop;
        // add css class
        if (erisTitleJapanesePosition > scrollPosition) {
            // only one action
            if ( erisTitleJapaneseSwitch === false ) {
                appearAction(erisTitleJapanese, animateFadeInRight);
                erisTitleJapaneseSwitch = true;
            }
        }
        // add css class
        if (erisTitleEnglishPosition > scrollPosition) {
            // only one action
            if ( erisTitleEnglishSwitch === false ) {
                appearAction(erisTitleEnglish, animateFadeInRight);
                erisTitleEnglishSwitch = true;
            }
        }
        // add css class
        if (erisDistancePosition > scrollPosition) {
            // only one action
            if ( erisDistanceSwitch === false ) {
                appearAction(erisDistance, animateFadeInRight);
                erisDistanceSwitch = true;
            }
        }
        // add css class
        if (erisSentenceJapanesePosition > scrollPosition) {
            // only one action
            if ( erisSentenceJapaneseSwitch === false ) {
                appearAction(erisSentenceJapanese, animateFadeInRight);
                erisSentenceJapaneseSwitch = true;
            }
        }
        // add css class
        if (erisSentenceEnglishPosition > scrollPosition) {
            // only one action
            if ( erisSentenceEnglishSwitch === false ) {
                appearAction(erisSentenceEnglish, animateFadeInRight);
                saturnSentenceEnglishSwitch = true;
            }
        }
        // ***==========*** Voyager 1 add animate ***==========***
        // Get title items.
        let voyager1Img = document.getElementById("voyager1_img");
        let voyager1ImgPosition = voyager1Img.offsetTop;
        let voyager1TitleJapanese = document.getElementById("voyager1_title_japanese");
        let voyager1TitleJapanesePosition = voyager1TitleJapanese.offsetTop;
        let voyager1TitleEnglish = document.getElementById("voyager1_title_english");
        let voyager1TitleEnglishPosition = voyager1TitleEnglish.offsetTop;
        let voyager1Distance = document.getElementById("voyager1_distance");
        let voyager1DistancePosition = voyager1Distance.offsetTop;
        let voyager1SentenceJapanese = document.getElementById("voyager1_sentence_japanese");
        let voyager1SentenceJapanesePosition = voyager1SentenceJapanese.offsetTop;
        let voyager1SentenceEnglish = document.getElementById("voyager1_sentence_english");
        let voyager1SentenceEnglishPosition = voyager1SentenceEnglish.offsetTop;
        // add css class
        if (voyager1ImgPosition > scrollPosition) {
            // only one action
            if ( voyager1ImgSwitch === false ) {
                appearAction(voyager1Img, animateFadeInBottomLeft);
                voyager1ImgSwitch = true;
            }
        }
        // add css class
        if (voyager1TitleJapanesePosition > scrollPosition) {
            // only one action
            if ( voyager1TitleJapaneseSwitch === false ) {
                appearAction(voyager1TitleJapanese, animateFadeInLeft);
                voyager1TitleJapaneseSwitch = true;
            }
        }
        // add css class
        if (voyager1TitleJapanesePosition > scrollPosition) {
            // only one action
            if ( voyager1TitleJapaneseSwitch === false ) {
                appearAction(voyager1TitleJapanese, animateFadeInLeft);
                voyager1TitleJapaneseSwitch = true;
            }
        }
        // add css class
        if (voyager1TitleEnglishPosition > scrollPosition) {
            // only one action
            if ( voyager1TitleEnglishSwitch === false ) {
                appearAction(voyager1TitleEnglish, animateFadeInLeft);
                voyager1TitleEnglishSwitch = true;
            }
        }
        // add css class
        if (voyager1DistancePosition > scrollPosition) {
            // only one action
            if ( voyager1DistanceSwitch === false ) {
                appearAction(voyager1Distance, animateFadeInLeft);
                voyager1DistanceSwitch = true;
            }
        }
        // add css class
        if (voyager1SentenceJapanesePosition > scrollPosition) {
            // only one action
            if ( voyager1SentenceJapaneseSwitch === false ) {
                appearAction(voyager1SentenceJapanese, animateFadeInLeft);
                voyager1SentenceJapaneseSwitch = true;
            }
        }
        // add css class
        if (voyager1SentenceEnglishPosition > scrollPosition) {
            // only one action
            if ( voyager1SentenceEnglishSwitch === false ) {
                appearAction(voyager1SentenceEnglish, animateFadeInLeft);
                voyager1SentenceEnglishSwitch = true;
            }
        }
        // ***==========*** Voyager 1 Message add animate ***==========***
        // Get title items.
        let voyager1MessageImg = document.getElementById("voyager1_message_img");
        let voyager1MessageImgPosition = voyager1MessageImg.offsetTop;
        let voyager1MessageJapanese = document.getElementById("voyager1_message_japanese");
        let voyager1MessageJapanesePosition = voyager1MessageJapanese.offsetTop;
        let voyager1MessageEnglish = document.getElementById("voyager1_message_english");
        let voyager1MessageEnglishPosition = voyager1MessageEnglish.offsetTop;
        // add css class
        if (voyager1MessageImgPosition > scrollPosition) {
            // only one action
            if ( voyager1MessageImgSwitch === false ) {
                // change display_non previous voyager1
                disappearAction(voyager1Img, animateFadeInBottomLeft, animateZoomOut);
                // appear action
                appearAction(voyager1MessageImg, animateZoomInRight);
                voyager1MessageImg.classList.add("animate__slower");
                // disappear action
                window.setTimeout(function(){
                    disappearAction(voyager1MessageImg, animateZoomInRight, animateZoomOutLeft);
                }, 5000);
                voyager1MessageImgSwitch = true;
            }
        }
        // add css class
        if (voyager1MessageJapanesePosition > scrollPosition) {
            // only one action
            if ( voyager1MessageJapaneseSwitch === false ) {
                // appear action
                appearAction(voyager1MessageJapanese, animateFlipInX);
                // disappear action
                window.setTimeout(function(){
                    disappearAction(voyager1MessageJapanese, animateFlipInX, animateFlipOutX);
                }, 5000);
                voyager1MessageJapaneseSwitch = true;
            }
        }
        // add css class
        if (voyager1MessageEnglishPosition > scrollPosition) {
            // only one action
            if ( voyager1MessageEnglishSwitch === false ) {
                // appear action
                appearAction(voyager1MessageEnglish, animateFlipInX);
                // disappear action
                window.setTimeout(function(){
                    disappearAction(voyager1MessageEnglish, animateFlipInX, animateFlipOutX);
                }, 5000);
                voyager1MessageEnglishSwitch = true;
            }
        }
        // ***==========*** asteroid add animate ***==========***
        // Get title items.
        let asteroid1 = document.getElementById("asteroid1");
        let asteroid1Position = asteroid1.offsetTop;
        let asteroid2 = document.getElementById("asteroid2");
        let asteroid2Position = asteroid2.offsetTop;
        let asteroid3 = document.getElementById("asteroid3");
        let asteroid3Position = asteroid3.offsetTop;
        let asteroid4 = document.getElementById("asteroid4");
        let asteroid4Position = asteroid4.offsetTop;
        let asteroid5 = document.getElementById("asteroid5");
        let asteroid5Position = asteroid5.offsetTop;
        let asteroid6 = document.getElementById("asteroid6");
        let asteroid6Position = asteroid6.offsetTop;
        let asteroid7 = document.getElementById("asteroid7");
        let asteroid7Position = asteroid7.offsetTop;
        let asteroid8 = document.getElementById("asteroid8");
        let asteroid8Position = asteroid8.offsetTop;
        let asteroid9 = document.getElementById("asteroid9");
        let asteroid9Position = asteroid9.offsetTop;
        let asteroid10 = document.getElementById("asteroid10");
        let asteroid10Position = asteroid10.offsetTop;
        // add css class
        if (asteroid1Position > scrollPosition) {
            // only one action
            if ( asteroid1Switch === false ) {
                appearAction(asteroid1, animateRotateIn);
                asteroid1Switch = true;
            }
        }
        // add css class
        if (asteroid2Position > scrollPosition) {
            // only one action
            if ( asteroid2Switch === false ) {
                appearAction(asteroid2, animateRotateIn);
                asteroid2Switch = true;
            }
        }
        // add css class
        if (asteroid3Position > scrollPosition) {
            // only one action
            if ( asteroid3Switch === false ) {
                appearAction(asteroid3, animateRotateIn);
                asteroid3Switch = true;
            }
        }
        // add css class
        if (asteroid4Position > scrollPosition) {
            // only one action
            if ( asteroid4Switch === false ) {
                appearAction(asteroid4, animateRotateIn);
                asteroid4Switch = true;
            }
        }
        // add css class
        if (asteroid5Position > scrollPosition) {
            // only one action
            if ( asteroid5Switch === false ) {
                appearAction(asteroid5, animateRotateIn);
                asteroid5Switch = true;
            }
        }
        // add css class
        if (asteroid6Position > scrollPosition) {
            // only one action
            if ( asteroid6Switch === false ) {
                appearAction(asteroid6, animateRotateIn);
                asteroid6Switch = true;
            }
        }
        // add css class
        if (asteroid7Position > scrollPosition) {
            // only one action
            if ( asteroid7Switch === false ) {
                appearAction(asteroid7, animateRotateIn);
                asteroid7Switch = true;
            }
        }
        // add css class
        if (asteroid8Position > scrollPosition) {
            // only one action
            if ( asteroid8Switch === false ) {
                appearAction(asteroid8, animateRotateIn);
                asteroid8Switch = true;
            }
        }
        // add css class
        if (asteroid9Position > scrollPosition) {
            // only one action
            if ( asteroid9Switch === false ) {
                appearAction(asteroid9, animateRotateIn);
                asteroid9Switch = true;
            }
        }
        // add css class
        if (asteroid10Position > scrollPosition) {
            // only one action
            if ( asteroid10Switch === false ) {
                appearAction(asteroid10, animateRotateIn);
                asteroid10Switch = true;
            }
        }
        // ***==========*** shooting star add animate ***==========***
        // Get title items.
        let shootingStar1 = document.getElementById("shooting_star1");
        let shootingStar1Position = shootingStar1.offsetTop + 200;
        let shootingStar2 = document.getElementById("shooting_star2");
        let shootingStar2Position = shootingStar2.offsetTop + 200;
        let shootingStar3 = document.getElementById("shooting_star3");
        let shootingStar3Position = shootingStar3.offsetTop + 200;
        let shootingStar4 = document.getElementById("shooting_star4");
        let shootingStar4Position = shootingStar4.offsetTop + 200;
        let shootingStar5 = document.getElementById("shooting_star5");
        let shootingStar5Position = shootingStar5.offsetTop + 200;
        let shootingStar6 = document.getElementById("shooting_star6");
        let shootingStar6Position = shootingStar6.offsetTop + 200;
        let shootingStar7 = document.getElementById("shooting_star7");
        let shootingStar7Position = shootingStar7.offsetTop + 200;
        let shootingStar8 = document.getElementById("shooting_star8");
        let shootingStar8Position = shootingStar8.offsetTop + 200;
        let shootingStar9 = document.getElementById("shooting_star9");
        let shootingStar9Position = shootingStar9.offsetTop + 200;
        let shootingStar10 = document.getElementById("shooting_star10");
        let shootingStar10Position = shootingStar10.offsetTop + 600;
        // add css class
        if (shootingStar1Position > scrollPosition) {
            // only one action
            if ( shootingStar1Switch === false ) {
                // appear action
                appearAction(shootingStar1, animateFadeInTopRight);
                // disappear action
                window.setTimeout(function(){
                    disappearAction(shootingStar1, animateFadeInTopRight, animateFadeOutBottomLeft)
                }, 1000);
                shootingStar1Switch = true;
            }
        }
        // add css class
        if (shootingStar2Position > scrollPosition) {
            // only one action
            if ( shootingStar2Switch === false ) {
                appearAction(shootingStar2, animateFadeInTopRight);
                shootingStar2.classList.add("animate__slower");
                // disappear action
                window.setTimeout(function(){
                    disappearAction(shootingStar2, animateFadeInTopRight, animateFadeOutBottomLeft)
                }, 2800);
                shootingStar2Switch = true;
            }
        }
        // add css class
        if (shootingStar3Position > scrollPosition) {
            // only one action
            if ( shootingStar3Switch === false ) {
                appearAction(shootingStar3, animateFadeInTopRight);
                // shootingStar3.classList.add("animate__slower");
                // disappear action
                window.setTimeout(function(){
                    disappearAction(shootingStar3, animateFadeInTopRight, animateFadeOutBottomLeft)
                }, 1000);
                shootingStar3Switch = true;
            }
        }
        // add css class
        if (shootingStar4Position > scrollPosition) {
            // only one action
            if ( shootingStar4Switch === false ) {
                appearAction(shootingStar4, animateFadeInTopRight);
                shootingStar4.classList.add("animate__slower");
                // disappear action
                window.setTimeout(function(){
                    disappearAction(shootingStar4, animateFadeInTopRight, animateFadeOutBottomLeft)
                }, 2800);
                shootingStar4Switch = true;
            }
        }
        // add css class
        if (shootingStar5Position > scrollPosition) {
            // only one action
            if ( shootingStar5Switch === false ) {
                appearAction(shootingStar5, animateFadeInTopRight);
                // shootingStar5.classList.add("animate__slower");
                // disappear action
                window.setTimeout(function(){
                    disappearAction(shootingStar5, animateFadeInTopRight, animateFadeOutBottomLeft)
                }, 1000);
                shootingStar5Switch = true;
            }
        }
        // add css class
        if (shootingStar6Position > scrollPosition) {
            // only one action
            if ( shootingStar6Switch === false ) {
                appearAction(shootingStar6, animateFadeInTopRight);
                shootingStar6.classList.add("animate__slower");
                // disappear action
                window.setTimeout(function(){
                    disappearAction(shootingStar6, animateFadeInTopRight, animateFadeOutBottomLeft)
                }, 2800);
                shootingStar6Switch = true;
            }
        }
        // add css class
        if (shootingStar7Position > scrollPosition) {
            // only one action
            if ( shootingStar7Switch === false ) {
                appearAction(shootingStar7, animateFadeInTopRight);
                // shootingStar7.classList.add("animate__slower");
                // disappear action
                window.setTimeout(function(){
                    disappearAction(shootingStar7, animateFadeInTopRight, animateFadeOutBottomLeft)
                }, 1000);
                shootingStar7Switch = true;
            }
        }
        // add css class
        if (shootingStar8Position > scrollPosition) {
            // only one action
            if ( shootingStar8Switch === false ) {
                appearAction(shootingStar8, animateFadeInTopRight);
                shootingStar8.classList.add("animate__slower");
                // disappear action
                window.setTimeout(function(){
                    disappearAction(shootingStar8, animateFadeInTopRight, animateFadeOutBottomLeft)
                }, 2800);
                shootingStar8Switch = true;
            }
        }
        // add css class
        if (shootingStar9Position > scrollPosition) {
            // only one action
            if ( shootingStar9Switch === false ) {
                appearAction(shootingStar9, animateFadeInTopRight);
                // shootingStar9.classList.add("animate__slower");
                // disappear action
                window.setTimeout(function(){
                    disappearAction(shootingStar9, animateFadeInTopRight, animateFadeOutBottomLeft)
                }, 1000);
                shootingStar9Switch = true;
            }
        }
        // add css class
        if (shootingStar10Position > scrollPosition) {
            // only one action
            if ( shootingStar10Switch === false ) {
                appearAction(shootingStar10, animateFadeInTopRight);
                // shootingStar10.classList.add("animate__slower");
                // disappear action
                window.setTimeout(function(){
                    disappearAction(shootingStar10, animateFadeInTopRight, animateFadeOutBottomLeft)
                }, 2000);
                shootingStar10Switch = true;
            }
        }
        // ***==========*** Light Speed!!! ***==========***
        let andromeda          = document.getElementById("andromeda");
        let lightSpeed         = document.getElementById("light_speed");
        let lightSpeedPosition = lightSpeed.offsetTop;
        // When through the "light_speed", change the sky color.
        if (lightSpeedPosition > scrollPosition) {
            if ( lightSpeedSwitch === false ) {
                // disappear andromeda
                disappearAction(andromeda,animateFadeIn,animateFadeOut);
                // change sky color
                journeyToTheUniverseScroll.style.backgroundColor = whiteSky;
                lightSpeedSwitch = true;
            }
        }
        if (lightSpeedPosition < scrollPosition) {
            if ( lightSpeedSwitch === true ) {
                // appear andromeda
                andromeda.classList.remove(animateFadeOut);
                appearAction(andromeda, animateFadeIn);
                // change sky color
                journeyToTheUniverseScroll.style.backgroundColor = darkSky;
                lightSpeedSwitch = false;
            }
        }
        // ***==========*** Light Speed Message ***==========***
        // Get title items.
        let lightSpeedMessageJapanese1 = document.getElementById("light_speed_message_japanese1");
        let lightSpeedMessageJapanese1Position = lightSpeedMessageJapanese1.offsetTop;
        let lightSpeedMessageEnglish1 = document.getElementById("light_speed_message_english1");
        let lightSpeedMessageEnglish1Position = lightSpeedMessageEnglish1.offsetTop;
        let lightSpeedMessageJapanese2 = document.getElementById("light_speed_message_japanese2");
        let lightSpeedMessageJapanese2Position = lightSpeedMessageJapanese2.offsetTop;
        let lightSpeedMessageEnglish2 = document.getElementById("light_speed_message_english2");
        let lightSpeedMessageEnglish2Position = lightSpeedMessageEnglish2.offsetTop;
        let lightSpeedMessageJapanese3 = document.getElementById("light_speed_message_japanese3");
        let lightSpeedMessageJapanese3Position = lightSpeedMessageJapanese3.offsetTop;
        let lightSpeedMessageEnglish3 = document.getElementById("light_speed_message_english3");
        let lightSpeedMessageEnglish3Position = lightSpeedMessageEnglish3.offsetTop;
        let lightSpeedMessageJapanese4 = document.getElementById("light_speed_message_japanese4");
        let lightSpeedMessageJapanese4Position = lightSpeedMessageJapanese4.offsetTop;
        let lightSpeedMessageEnglish4 = document.getElementById("light_speed_message_english4");
        let lightSpeedMessageEnglish4Position = lightSpeedMessageEnglish4.offsetTop;
        let lightSpeedMessageJapanese5 = document.getElementById("light_speed_message_japanese5");
        let lightSpeedMessageJapanese5Position = lightSpeedMessageJapanese5.offsetTop;
        let lightSpeedMessageEnglish5 = document.getElementById("light_speed_message_english5");
        let lightSpeedMessageEnglish5Position = lightSpeedMessageEnglish5.offsetTop;
        // add css class
        if ( lightSpeedMessageJapanese1Position > scrollPosition) {
            // only one action
            if ( lightSpeedMessageJapanese1Switch === false ) {
                appearAction(lightSpeedMessageJapanese1, animateFadeIn);
                lightSpeedMessageJapanese1Switch = true;
            }
        }
        // add css class
        if ( lightSpeedMessageEnglish1Position > scrollPosition) {
            // only one action
            if ( lightSpeedMessageEnglish1Switch === false ) {
                appearAction(lightSpeedMessageEnglish1, animateFadeIn);
                lightSpeedMessageEnglish1Switch = true;
            }
        }
        // add css class
        if ( lightSpeedMessageJapanese2Position > scrollPosition) {
            // only one action
            if ( lightSpeedMessageJapanese2Switch === false ) {
                appearAction(lightSpeedMessageJapanese2, animateFadeIn);
                lightSpeedMessageJapanese2Switch = true;
            }
        }
        // add css class
        if ( lightSpeedMessageEnglish2Position > scrollPosition) {
            // only one action
            if ( lightSpeedMessageEnglish2Switch === false ) {
                appearAction(lightSpeedMessageEnglish2, animateFadeIn);
                lightSpeedMessageEnglish2Switch = true;
            }
        }
        // add css class
        if ( lightSpeedMessageJapanese3Position > scrollPosition) {
            // only one action
            if ( lightSpeedMessageJapanese3Switch === false ) {
                appearAction(lightSpeedMessageJapanese3, animateFadeIn);
                lightSpeedMessageJapanese3Switch = true;
            }
        }
        // add css class
        if ( lightSpeedMessageEnglish3Position > scrollPosition) {
            // only one action
            if ( lightSpeedMessageEnglish3Switch === false ) {
                appearAction(lightSpeedMessageEnglish3, animateFadeIn);
                lightSpeedMessageEnglish3Switch = true;
            }
        }
        // add css class
        if ( lightSpeedMessageJapanese4Position > scrollPosition) {
            // only one action
            if ( lightSpeedMessageJapanese4Switch === false ) {
                appearAction(lightSpeedMessageJapanese4, animateFadeIn);
                lightSpeedMessageJapanese4Switch = true;
            }
        }
        // add css class
        if ( lightSpeedMessageEnglish4Position > scrollPosition) {
            // only one action
            if ( lightSpeedMessageEnglish4Switch === false ) {
                appearAction(lightSpeedMessageEnglish4, animateFadeIn);
                lightSpeedMessageEnglish4Switch = true;
            }
        }
        // add css class
        if ( lightSpeedMessageJapanese5Position > scrollPosition) {
            // only one action
            if ( lightSpeedMessageJapanese5Switch === false ) {
                appearAction(lightSpeedMessageJapanese5, animateFadeIn);
                lightSpeedMessageJapanese5Switch = true;
            }
        }
        // add css class
        if ( lightSpeedMessageEnglish5Position > scrollPosition) {
            // only one action
            if ( lightSpeedMessageEnglish5Switch === false ) {
                appearAction(lightSpeedMessageEnglish5, animateFadeIn);
                lightSpeedMessageEnglish5Switch = true;
            }
        }
        // ***==========*** Light Speed Message ***==========***
        // Get title items.
        let endOfJourney = document.getElementById("end_of_journey");
        let endOfJourneyPosition = endOfJourney.offsetTop;
        const audio = document.getElementById('music');
        let currentVolume = audio.volume; // get current Volume
        const fadeDuration = 5000; // Fade out time (ms)
        const fadeInterval = 50; // Processing interval (ms)
        const volumeStep = currentVolume / (fadeDuration / fadeInterval); // The volume reduction amount for each process
        // add css class
        if ( endOfJourneyPosition > scrollPosition) {
            // Set a timer to gradually decrease the volume
            const fadeOutInterval = setInterval(() => {
                // Decrease the volume
                currentVolume -= volumeStep;
                // Stop processing when volume drops below 0
                if (currentVolume <= 0) {
                    audio.volume = 0;
                    audio.pause(); // stop music
                    clearInterval(fadeOutInterval); // clear timer
                } else {
                    audio.volume = currentVolume;
                }
            }, fadeInterval);
            window.setTimeout(function(){
                window.location.href = './end_of_journey.html';
            }, 6000);
        }
        // ***==========*** My function ***==========***
        // Control "animate" Appear Action
        function appearAction(appearTarget, appearEffect){
            // Setting const and let.
            const displayNon = "display_non"; // Often use when animate.
            const animateAnimated = "animate__animated";
            // Start action.
            appearTarget.classList.remove(displayNon);
            appearTarget.classList.add(animateAnimated);
            appearTarget.classList.add(appearEffect);
            return;
        }
        // Control "animate" disappear Action
        function disappearAction(disappearTarget, removeAnimate, disappearEffect){
            disappearTarget.classList.remove(removeAnimate);
            disappearTarget.classList.add(disappearEffect);
            return;
        }
    });
}
// ***==========*** ↑↑  Setting scroll event! ↑↑  ***==========***
