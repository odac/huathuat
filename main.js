document.addEventListener('DOMContentLoaded', () => {
    const horoscopeButtonsContainer = document.querySelector('.horoscope-buttons');
    const resultContainer = document.getElementById('result-container');

    const luckyHoroscopeData = {
        aries: {
            color: 'Red',
            explanation: 'Red symbolizes passion and energy, bringing you good fortune and courage to tackle challenges today.'
        },
        taurus: {
            color: 'Green',
            explanation: 'Green represents growth and harmony, promoting stability and prosperity in your endeavors.'
        },
        gemini: {
            color: 'Yellow',
            explanation: 'Yellow signifies joy and intellect, enhancing your communication and bringing bright ideas.'
        },
        cancer: {
            color: 'Silver',
            explanation: 'Silver reflects intuition and emotional balance, guiding you through the day with peace and clarity.'
        },
        leo: {
            color: 'Gold',
            explanation: 'Gold denotes success and generosity, amplifying your confidence and leadership qualities.'
        },
        virgo: {
            color: 'Navy Blue',
            explanation: 'Navy Blue represents wisdom and efficiency, supporting your analytical skills and attention to detail.'
        },
        libra: {
            color: 'Pink',
            explanation: 'Pink symbolizes love and partnership, fostering harmonious relationships and aesthetic appreciation.'
        },
        scorpio: {
            color: 'Black',
            explanation: 'Black signifies transformation and depth, empowering you with resilience and intense focus.'
        },
        sagittarius: {
            color: 'Purple',
            explanation: 'Purple inspires spirituality and adventure, broadening your horizons and bringing good luck on journeys.'
        },
        capricorn: {
            color: 'Brown',
            explanation: 'Brown indicates stability and practicality, grounding your efforts and helping you build solid foundations.'
        },
        aquarius: {
            color: 'Electric Blue',
            explanation: 'Electric Blue stands for innovation and freedom, sparking new ideas and connecting you with like-minded individuals.'
        },
        pisces: {
            color: 'Sea Green',
            explanation: 'Sea Green embodies healing and compassion, enhancing your empathy and creative flow.'
        }
    };

    horoscopeButtonsContainer.addEventListener('click', (event) => {
        const target = event.target;
        if (target.tagName === 'BUTTON') {
            const selectedHoroscope = target.dataset.horoscope;
            if (selectedHoroscope && luckyHoroscopeData[selectedHoroscope]) {
                displayLuckyColour(selectedHoroscope, luckyHoroscopeData[selectedHoroscope]);
            }
        }
    });

    function displayLuckyColour(horoscope, data) {
        resultContainer.innerHTML = `
            <div class="color-swatch" style="background-color: ${data.color.toLowerCase()};">
                <h3>${data.color}</h3>
                <p>${data.explanation}</p>
            </div>
        `;
    }
});
