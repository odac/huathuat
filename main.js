document.addEventListener('DOMContentLoaded', () => {
    const horoscopeButtonsContainer = document.querySelector('.horoscope-buttons');
    const resultContainer = document.getElementById('result-container');
    const accessoryContainer = document.getElementById('accessory-container');
    
    // IMPORTANT: Replace "YOUR_UNSPLASH_API_KEY" with your actual Unsplash API key
    const UNSPLASH_API_KEY = "YOUR_UNSPLASH_API_KEY";

    const luckyHoroscopeData = {
        aries: {
            color: 'Red',
            explanation: 'Red symbolizes passion and energy, bringing you good fortune and courage to tackle challenges today.',
            accessories: ['Red Scarf', 'Garnet Bracelet', 'Red Beanie']
        },
        taurus: {
            color: 'Green',
            explanation: 'Green represents growth and harmony, promoting stability and prosperity in your endeavors.',
            accessories: ['Jade Necklace', 'Green-faced Watch', 'Emerald Earrings']
        },
        gemini: {
            color: 'Yellow',
            explanation: 'Yellow signifies joy and intellect, enhancing your communication and bringing bright ideas.',
            accessories: ['Yellow Handbag', 'Citrine Pendant', 'Golden Scarf']
        },
        cancer: {
            color: 'Silver',
            explanation: 'Silver reflects intuition and emotional balance, guiding you through the day with peace and clarity.',
            accessories: ['Pearl Necklace', 'Silver Locket', 'Moonstone Ring']
        },
        leo: {
            color: 'Gold',
            explanation: 'Gold denotes success and generosity, amplifying your confidence and leadership qualities.',
            accessories: ['Gold Chain', 'Amber Ring', 'Gold Watch']
        },
        virgo: {
            color: 'Navy Blue',
            explanation: 'Navy Blue represents wisdom and efficiency, supporting your analytical skills and attention to detail.',
            accessories: ['Sapphire Ring', 'Navy Tie', 'Blue Topaz Bracelet']
        },
        libra: {
            color: 'Pink',
            explanation: 'Pink symbolizes love and partnership, fostering harmonious relationships and aesthetic appreciation.',
            accessories: ['Rose Quartz Bracelet', 'Pink Tourmaline Earrings', 'Pastel Pink Scarf']
        },
        scorpio: {
            color: 'Black',
            explanation: 'Black signifies transformation and depth, empowering you with resilience and intense focus.',
            accessories: ['Obsidian Pendant', 'Black Leather Watch', 'Onyx Ring']
        },
        sagittarius: {
            color: 'Purple',
            explanation: 'Purple inspires spirituality and adventure, broadening your horizons and bringing good luck on journeys.',
            accessories: ['Amethyst Necklace', 'Purple Gloves', 'Lapis Lazuli Bracelet']
        },
        capricorn: {
            color: 'Brown',
            explanation: 'Brown indicates stability and practicality, grounding your efforts and helping you build solid foundations.',
            accessories: ['Leather Belt', 'Smoky Quartz Ring', 'Tiger\'s Eye Bracelet']
        },
        aquarius: {
            color: 'Electric Blue',
            explanation: 'Electric Blue stands for innovation and freedom, sparking new ideas and connecting you with like-minded individuals.',
            accessories: ['Aquamarine Earrings', 'Turquoise Bracelet', 'Blue Agate Necklace']
        },
        pisces: {
            color: 'Sea Green',
            explanation: 'Sea Green embodies healing and compassion, enhancing your empathy and creative flow.',
            accessories: ['Aquamarine Pendant', 'Sea-glass Jewelry', 'Light Green Scarf']
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

    async function displayLuckyColour(horoscope, data) {
        resultContainer.innerHTML = `
            <div class="color-swatch" style="background-color: ${data.color.toLowerCase()};">
                <h3>${data.color}</h3>
                <p>${data.explanation}</p>
            </div>
        `;
        
        let accessoryHTML = '<h3>Associated Accessories</h3><div class="accessory-items">';
        if (UNSPLASH_API_KEY === "YOUR_UNSPLASH_API_KEY") {
            accessoryHTML += '<p style="color: red;">Please replace "YOUR_UNSPLASH_API_KEY" in main.js with your actual Unsplash API key.</p>';
        } else {
            for (const item of data.accessories) {
                const imageUrl = await fetchImageFromUnsplash(item);
                accessoryHTML += `
                    <div class="accessory-item">
                        <img src="${imageUrl}" alt="${item}">
                        <p>${item}</p>
                    </div>
                `;
            }
        }
        accessoryHTML += '</div>';
        accessoryContainer.innerHTML = accessoryHTML;
    }

    async function fetchImageFromUnsplash(query) {
        try {
            const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=1&client_id=${UNSPLASH_API_KEY}`);
            const data = await response.json();
            if (data.results && data.results.length > 0) {
                return data.results[0].urls.small;
            }
        } catch (error) {
            console.error('Error fetching image from Unsplash:', error);
        }
        return 'https://via.placeholder.com/100'; // Fallback image
    }
});
