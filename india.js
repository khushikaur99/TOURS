// Toggle mobile menu
const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');
const leftNav = document.getElementById('leftNav');

menuToggle.addEventListener('click', () => {
    leftNav.classList.toggle('-left-64');
    leftNav.classList.toggle('left-0');
});

closeMenu.addEventListener('click', () => {
    leftNav.classList.add('-left-64');
    leftNav.classList.remove('left-0');
});

// Close menu when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth < 768 && !leftNav.contains(e.target) && e.target !== menuToggle) {
        leftNav.classList.add('-left-64');
        leftNav.classList.remove('left-0');
    }
});

// Toggle region sections
document.querySelectorAll('.region-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const arrow = button.querySelector('.region-arrow');
        
        content.classList.toggle('hidden');
        arrow.classList.toggle('rotate-180');
    });
});

// Package data with detailed itineraries
const packages = [
    {
        id: 1,
        title: 'Golden Triangle Tour',
        region: 'North India',
        duration: '7 Days / 6 Nights',
        price: '$899',
        description: 'Explore India\'s most famous circuit covering Delhi, Agra, and Jaipur. Visit the iconic Taj Mahal, majestic Amber Fort, and experience the rich Mughal and Rajput heritage.',
        image: 'https://i.pinimg.com/736x/25/d1/7b/25d17bc2c463029cffa9d3d083ebb00d.jpg',
        highlights: ['Taj Mahal at sunrise', 'Red Fort in Delhi', 'Amber Fort elephant ride', 'City Palace in Jaipur'],
        rating: 4.8,
        reviews: 124,
        itinerary: [
            {
                day: 1,
                title: 'Arrival in Delhi',
                description: 'Arrive at Delhi airport and transfer to hotel. Afternoon city tour visiting India Gate, Qutub Minar and Humayun\'s Tomb. Evening at leisure.',
                meals: 'Dinner'
            },
            {
                day: 2,
                title: 'Delhi Sightseeing',
                description: 'Full day tour of Old and New Delhi including Red Fort, Jama Masjid, Raj Ghat, Lotus Temple and Akshardham Temple.',
                meals: 'Breakfast, Lunch'
            },
            {
                day: 3,
                title: 'Delhi to Agra',
                description: 'Drive to Agra (4 hours). Visit the magnificent Taj Mahal at sunset, Agra Fort and local markets.',
                meals: 'Breakfast, Dinner'
            },
            {
                day: 4,
                title: 'Agra to Jaipur',
                description: 'Morning visit to Taj Mahal at sunrise. Drive to Jaipur via Fatehpur Sikri (6 hours). Evening at leisure.',
                meals: 'Breakfast'
            },
            {
                day: 5,
                title: 'Jaipur Sightseeing',
                description: 'Visit Amber Fort with elephant ride, City Palace, Jantar Mantar, Hawa Mahal and local bazaars.',
                meals: 'Breakfast, Lunch'
            },
            {
                day: 6,
                title: 'Jaipur Free Day',
                description: 'Day at leisure for shopping or optional activities like hot air balloon ride or cooking class.',
                meals: 'Breakfast'
            },
            {
                day: 7,
                title: 'Departure',
                description: 'Transfer to Delhi airport for your onward journey.',
                meals: 'Breakfast'
            }
        ],
        inclusions: [
            '6 nights accommodation in 4-star hotels',
            'Daily breakfast and 3 dinners',
            'All transfers and sightseeing in private AC vehicle',
            'Entrance fees to monuments',
            'English speaking guide',
            'Elephant ride at Amber Fort'
        ],
        exclusions: [
            'International flights',
            'Travel insurance',
            'Personal expenses',
            'Tips and gratuities',
            'Anything not mentioned in inclusions'
        ]
    },
    {
        id: 2,
        title: 'Kerala Backwaters Cruise',
        region: 'South India',
        duration: '5 Days / 4 Nights',
        price: '$699',
        description: 'Experience the serene backwaters of Kerala with houseboat cruises, spice plantations, and pristine beaches. Perfect blend of nature and culture.',
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        highlights: ['Houseboat cruise in Alleppey', 'Spice plantation visit', 'Munnar tea gardens', 'Cochin cultural tour'],
        rating: 4.7,
        reviews: 89,
        itinerary: [
            {
                day: 1,
                title: 'Arrival in Cochin',
                description: 'Arrive at Cochin airport and city tour including Chinese fishing nets, Dutch Palace, and Jewish Synagogue.',
                meals: 'Dinner'
            },
            {
                day: 2,
                title: 'Cochin to Munnar',
                description: 'Drive to Munnar (4 hours). Visit tea gardens, spice plantations, and enjoy the hill station atmosphere.',
                meals: 'Breakfast, Dinner'
            },
            {
                day: 3,
                title: 'Munnar to Alleppey',
                description: 'Morning in Munnar, then drive to Alleppey. Board traditional houseboat for backwater cruise.',
                meals: 'All meals on houseboat'
            },
            {
                day: 4,
                title: 'Alleppey Backwaters',
                description: 'Full day houseboat cruise through the scenic backwaters, visiting local villages and enjoying local cuisine.',
                meals: 'All meals on houseboat'
            },
            {
                day: 5,
                title: 'Departure',
                description: 'Disembark from houseboat and transfer to Cochin airport for departure.',
                meals: 'Breakfast'
            }
        ],
        inclusions: [
            '4 nights accommodation (2 nights hotel + 2 nights houseboat)',
            'All meals during houseboat stay',
            'Daily breakfast at hotels',
            'All transfers in AC vehicle',
            'Entrance fees to attractions',
            'English speaking guide'
        ],
        exclusions: [
            'International flights',
            'Travel insurance',
            'Personal expenses',
            'Tips and gratuities',
            'Lunch and dinner at hotels (except houseboat)'
        ]
    },
    {
        id: 3,
        title: 'Rajasthan Royal Heritage',
        region: 'West India',
        duration: '10 Days / 9 Nights',
        price: '$1299',
        description: 'Journey through the royal state of Rajasthan visiting magnificent palaces, desert landscapes, and experiencing the rich cultural heritage.',
        image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        highlights: ['Udaipur City Palace', 'Jaisalmer desert safari', 'Jodhpur Mehrangarh Fort', 'Pushkar holy city'],
        rating: 4.9,
        reviews: 156,
        itinerary: [
            {
                day: 1,
                title: 'Arrival in Jaipur',
                description: 'Arrive in Jaipur, the Pink City. Evening visit to local markets and traditional dinner.',
                meals: 'Dinner'
            },
            {
                day: 2,
                title: 'Jaipur Exploration',
                description: 'Visit Amber Fort, City Palace, Jantar Mantar, and Hawa Mahal. Experience elephant ride at Amber Fort.',
                meals: 'Breakfast, Lunch'
            },
            {
                day: 3,
                title: 'Jaipur to Pushkar',
                description: 'Drive to Pushkar. Visit the holy Pushkar Lake, Brahma Temple, and enjoy sunset from Savitri Temple.',
                meals: 'Breakfast, Dinner'
            },
            {
                day: 4,
                title: 'Pushkar to Jodhpur',
                description: 'Morning in Pushkar, then drive to Jodhpur. Evening visit to Clock Tower and Sardar Market.',
                meals: 'Breakfast'
            },
            {
                day: 5,
                title: 'Jodhpur Sightseeing',
                description: 'Explore magnificent Mehrangarh Fort, Jaswant Thada, and take a walk through the blue city streets.',
                meals: 'Breakfast, Lunch'
            },
            {
                day: 6,
                title: 'Jodhpur to Jaisalmer',
                description: 'Drive to the Golden City of Jaisalmer. Evening at leisure to explore the local markets.',
                meals: 'Breakfast, Dinner'
            },
            {
                day: 7,
                title: 'Jaisalmer Desert Safari',
                description: 'Visit Jaisalmer Fort, then desert safari with camel ride and overnight camping under stars.',
                meals: 'All meals at desert camp'
            },
            {
                day: 8,
                title: 'Jaisalmer to Udaipur',
                description: 'Drive to Udaipur (6 hours). Evening boat ride on Lake Pichola.',
                meals: 'Breakfast, Dinner'
            },
            {
                day: 9,
                title: 'Udaipur City of Lakes',
                description: 'Visit City Palace, Jagdish Temple, Saheliyon ki Bari, and enjoy sunset from Monsoon Palace.',
                meals: 'Breakfast, Lunch'
            },
            {
                day: 10,
                title: 'Departure',
                description: 'Transfer to Udaipur airport for your onward journey.',
                meals: 'Breakfast'
            }
        ],
        inclusions: [
            '9 nights accommodation in heritage hotels',
            'Daily breakfast and 5 dinners',
            'All transfers in AC vehicle',
            'Desert safari with camel ride',
            '1 night desert camping',
            'Boat ride on Lake Pichola',
            'English speaking guide',
            'All entrance fees'
        ],
        exclusions: [
            'International flights',
            'Travel insurance',
            'Personal expenses',
            'Tips and gratuities',
            'Meals not mentioned in inclusions'
        ]
    }
];

// Current view state
let currentView = 'list'; // 'list' or 'package'
let currentPackageId = null;

// Create main content when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    renderPackageList();
});

// Render package list view
function renderPackageList() {
    currentView = 'list';
    const mainContent = document.getElementById('mainContent');
    
    // Update main content classes for proper alignment
    mainContent.className = 'flex-1 p-6 pt-20 md:pt-6 md:ml-0';
    mainContent.innerHTML = '';
    
    // Create search bar
    const searchBar = document.createElement('div');
    searchBar.className = 'mb-8';
    searchBar.innerHTML = `
        <div class="relative max-w-2xl mx-auto">
            <input type="text" placeholder="Search tour packages..." 
                   class="w-full py-3 px-5 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm">
            <button class="absolute right-3 top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full hover:bg-orange-700 transition-colors">
                <i class="fas fa-search"></i>
            </button>
        </div>
    `;
    mainContent.appendChild(searchBar);
    
    // Create heading
    const heading = document.createElement('div');
    heading.className = 'flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4';
    heading.innerHTML = `
        <h1 class="text-3xl font-bold text-primary">Popular India Tour Packages</h1>
        <div class="flex items-center space-x-2">
            <span class="text-gray-600">Sort by:</span>
            <select class="border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Most Popular</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Duration: Short to Long</option>
            </select>
        </div>
    `;
    mainContent.appendChild(heading);
    
    // Create packages container with better responsive grid
    const packagesContainer = document.createElement('div');
    packagesContainer.className = 'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6';
    packagesContainer.id = 'packagesContainer';
    mainContent.appendChild(packagesContainer);
    
    // Load packages
    packages.forEach(pkg => {
        const packageCard = document.createElement('div');
        packageCard.className = 'package-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col';
        
        // Generate star rating
        const stars = Array.from({ length: 5 }, (_, i) => 
            i < Math.floor(pkg.rating) ? 
            '<i class="fas fa-star text-yellow-400"></i>' : 
            (i < pkg.rating ? '<i class="fas fa-star-half-alt text-yellow-400"></i>' : '<i class="far fa-star text-yellow-400"></i>')
        ).join('');
        
        packageCard.innerHTML = `
            <div class="relative flex-shrink-0">
                <img src="${pkg.image}" alt="${pkg.title}" class="w-full h-48 object-cover">
                <span class="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    ${pkg.region}
                </span>
            </div>
            <div class="p-5 flex flex-col flex-grow">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-xl font-bold text-gray-800 flex-grow">${pkg.title}</h3>
                    <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded font-semibold ml-2 flex-shrink-0">${pkg.duration}</span>
                </div>
                
                <div class="flex items-center mb-3">
                    <div class="mr-2 flex">
                        ${stars}
                    </div>
                    <span class="text-sm text-gray-600">${pkg.rating} (${pkg.reviews} reviews)</span>
                </div>
                
                <p class="text-gray-600 mb-4 flex-grow">${pkg.description}</p>
                
                <div class="mb-4">
                    <h4 class="font-semibold text-gray-800 mb-2">Tour Highlights:</h4>
                    <ul class="space-y-1 text-sm">
                        ${pkg.highlights.slice(0, 4).map(highlight => `
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-primary mr-2 text-xs mt-1 flex-shrink-0"></i>
                                <span class="leading-tight">${highlight}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
                
                <div class="flex justify-between items-center mt-auto pt-4">
                    <span class="text-2xl font-bold text-primary">${pkg.price}</span>
                    <button class="view-package-btn bg-primary hover:bg-orange-700 text-white py-2 px-4 rounded-lg transition-colors duration-300" data-id="${pkg.id}">
                        View Details
                    </button>
                </div>
            </div>
        `;
        
        packagesContainer.appendChild(packageCard);
    });
    
    // Add event listeners to view buttons
    document.querySelectorAll('.view-package-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const packageId = parseInt(e.target.getAttribute('data-id'));
            renderPackageDetails(packageId);
        });
    });
}

// Render package details view
function renderPackageDetails(packageId) {
    currentView = 'package';
    currentPackageId = packageId;
    
    const pkg = packages.find(p => p.id === packageId);
    if (!pkg) return;
    
    const mainContent = document.getElementById('mainContent');
    mainContent.className = 'flex-1 p-6 pt-20 md:pt-6 md:ml-0';
    mainContent.innerHTML = '';
    
    // Create back button
    const backButton = document.createElement('button');
    backButton.className = 'mb-6 flex items-center text-primary hover:text-orange-700 transition-colors';
    backButton.innerHTML = `
        <i class="fas fa-arrow-left mr-2"></i> Back to Packages
    `;
    backButton.addEventListener('click', renderPackageList);
    mainContent.appendChild(backButton);
    
    // Package header
    const header = document.createElement('div');
    header.className = 'bg-white rounded-xl shadow-md overflow-hidden mb-8';
    header.innerHTML = `
        <div class="relative">
            <img src="${pkg.image}" alt="${pkg.title}" class="w-full h-64 md:h-80 object-cover">
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h1 class="text-3xl md:text-4xl font-bold text-white">${pkg.title}</h1>
                <div class="flex items-center mt-2">
                    <span class="bg-primary text-white text-sm px-3 py-1 rounded-full mr-3">${pkg.region}</span>
                    <span class="text-white"><i class="fas fa-clock mr-1"></i> ${pkg.duration}</span>
                </div>
            </div>
        </div>
        <div class="p-6">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                <div class="mb-4 md:mb-0">
                    <span class="text-3xl font-bold text-primary">${pkg.price}</span>
                    <span class="text-gray-600 ml-2">per person</span>
                </div>
                <button class="bg-primary hover:bg-orange-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300">
                    <i class="fas fa-calendar-check mr-2"></i> Book Now
                </button>
            </div>
        </div>
    `;
    mainContent.appendChild(header);
    
    // Package tabs
    const tabs = document.createElement('div');
    tabs.className = 'flex border-b border-gray-200 mb-8 overflow-x-auto';
    tabs.innerHTML = `
        <button class="tab-btn active px-6 py-3 font-medium text-primary border-b-2 border-primary whitespace-nowrap">Overview</button>
        <button class="tab-btn px-6 py-3 font-medium text-gray-600 hover:text-primary whitespace-nowrap">Itinerary</button>
        <button class="tab-btn px-6 py-3 font-medium text-gray-600 hover:text-primary whitespace-nowrap">Inclusions</button>
        <button class="tab-btn px-6 py-3 font-medium text-gray-600 hover:text-primary whitespace-nowrap">Gallery</button>
    `;
    mainContent.appendChild(tabs);
    
    // Tab content container
    const tabContent = document.createElement('div');
    tabContent.className = 'bg-white rounded-xl shadow-md p-6 mb-8';
    tabContent.id = 'tabContent';
    mainContent.appendChild(tabContent);
    
    // Render default tab (Overview)
    renderOverviewTab(pkg);
    
    // Add tab click handlers
    document.querySelectorAll('.tab-btn').forEach((btn, index) => {
        btn.addEventListener('click', () => {
            // Update active tab
            document.querySelectorAll('.tab-btn').forEach(b => {
                b.classList.remove('active', 'text-primary', 'border-b-2', 'border-primary');
                b.classList.add('text-gray-600');
            });
            btn.classList.add('active', 'text-primary', 'border-b-2', 'border-primary');
            btn.classList.remove('text-gray-600');
            
            // Render appropriate tab content
            switch(index) {
                case 0:
                    renderOverviewTab(pkg);
                    break;
                case 1:
                    renderItineraryTab(pkg);
                    break;
                case 2:
                    renderInclusionsTab(pkg);
                    break;
                case 3:
                    renderGalleryTab(pkg);
                    break;
            }
        });
    });
}

// Render Overview tab content
function renderOverviewTab(pkg) {
    const tabContent = document.getElementById('tabContent');
    tabContent.innerHTML = `
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Tour Overview</h2>
        <p class="text-gray-600 mb-6">${pkg.description}</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
                <h3 class="text-xl font-semibold text-gray-800 mb-3">Tour Highlights</h3>
                <ul class="space-y-2">
                    ${pkg.highlights.map(highlight => `
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-primary mt-1 mr-2"></i>
                            <span class="text-gray-600">${highlight}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
            <div>
                <h3 class="text-xl font-semibold text-gray-800 mb-3">Quick Facts</h3>
                <ul class="space-y-3">
                    <li class="flex">
                        <span class="w-32 font-medium text-gray-700">Duration:</span>
                        <span class="text-gray-600">${pkg.duration}</span>
                    </li>
                    <li class="flex">
                        <span class="w-32 font-medium text-gray-700">Destinations:</span>
                        <span class="text-gray-600">${pkg.region}</span>
                    </li>
                    <li class="flex">
                        <span class="w-32 font-medium text-gray-700">Price From:</span>
                        <span class="text-primary font-bold">${pkg.price}</span>
                    </li>
                    <li class="flex">
                        <span class="w-32 font-medium text-gray-700">Rating:</span>
                        <span class="text-gray-600">${pkg.rating}/5 (${pkg.reviews} reviews)</span>
                    </li>
                </ul>
            </div>
        </div>
        
        <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">Why Choose This Tour?</h3>
            <p class="text-gray-600">This carefully crafted itinerary offers the perfect balance of sightseeing, cultural experiences, and free time to explore on your own. Our expert local guides will bring each destination to life with their knowledge and passion for their country.</p>
        </div>
    `;
}

// Render Itinerary tab content
function renderItineraryTab(pkg) {
    const tabContent = document.getElementById('tabContent');
    tabContent.innerHTML = `
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Detailed Itinerary</h2>
        
        <div class="space-y-8">
            ${pkg.itinerary.map(day => `
                <div class="itinerary-day">
                    <div class="day-number">${day.day}</div>
                    <div class="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Day ${day.day}: ${day.title}</h3>
                        <p class="text-gray-600 mb-4">${day.description}</p>
                        <div class="flex items-center text-sm text-gray-500">
                            <i class="fas fa-utensils mr-2"></i>
                            <span>Meals: ${day.meals}</span>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Render Inclusions tab content
function renderInclusionsTab(pkg) {
    const tabContent = document.getElementById('tabContent');
    tabContent.innerHTML = `
        <h2 class="text-2xl font-bold text-gray-800 mb-6">What's Included</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h3 class="text-xl font-semibold text-primary mb-4">Inclusions</h3>
                <ul class="space-y-3">
                    ${pkg.inclusions.map(item => `
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                            <span class="text-gray-600">${item}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
            <div>
                <h3 class="text-xl font-semibold text-primary mb-4">Exclusions</h3>
                <ul class="space-y-3">
                    ${pkg.exclusions.map(item => `
                        <li class="flex items-start">
                            <i class="fas fa-times-circle text-red-500 mt-1 mr-2"></i>
                            <span class="text-gray-600">${item}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
}

// Render Gallery tab content
function renderGalleryTab(pkg) {
    const tabContent = document.getElementById('tabContent');
    tabContent.innerHTML = `
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Tour Gallery</h2>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div class="overflow-hidden rounded-lg">
                <img src="${pkg.image}" alt="${pkg.title}" class="w-full h-32 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer">
            </div>
            <div class="overflow-hidden rounded-lg">
                <img src="https://images.unsplash.com/photo-1582972236019-e3d10fb7c3fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Tour image" class="w-full h-32 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer">
            </div>
            <div class="overflow-hidden rounded-lg">
                <img src="https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Tour image" class="w-full h-32 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer">
            </div>
            <div class="overflow-hidden rounded-lg">
                <img src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Tour image" class="w-full h-32 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer">
            </div>
            <div class="overflow-hidden rounded-lg">
                <img src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Tour image" class="w-full h-32 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer">
            </div>
            <div class="overflow-hidden rounded-lg">
                <img src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Tour image" class="w-full h-32 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer">
            </div>
            <div class="overflow-hidden rounded-lg">
                <img src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Tour image" class="w-full h-32 object-cover hover:scale-105 transition-transform duration-// Completion of renderGalleryTab function
300 cursor-pointer">
            </div>
            <div class="overflow-hidden rounded-lg">
                <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Tour image" class="w-full h-32 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer">
            </div>
            <div class="overflow-hidden rounded-lg">
                <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Tour image" class="w-full h-32 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer">
            </div>
        </div>
        
        <div class="mt-6 p-4 bg-gray-50 rounded-lg">
            <p class="text-gray-600 text-sm">
                <i class="fas fa-info-circle mr-2"></i>
                Click on any image to view full size. More photos will be available during your tour!
            </p>
        </div>
    `;
}

// Search functionality
function setupSearch() {
    const searchInput = document.querySelector('input[placeholder="Search tour packages..."]');
    const searchButton = document.querySelector('.fa-search').parentElement;
    
    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        if (query === '') {
            renderPackageList();
            return;
        }
        
        const filteredPackages = packages.filter(pkg => 
            pkg.title.toLowerCase().includes(query) ||
            pkg.description.toLowerCase().includes(query) ||
            pkg.region.toLowerCase().includes(query) ||
            pkg.highlights.some(highlight => highlight.toLowerCase().includes(query))
        );
        
        renderFilteredPackages(filteredPackages, query);
    }
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    searchButton.addEventListener('click', performSearch);
}

// Render filtered packages
function renderFilteredPackages(filteredPackages, query) {
    const packagesContainer = document.getElementById('packagesContainer');
    
    if (filteredPackages.length === 0) {
        packagesContainer.innerHTML = `
            <div class="col-span-full text-center py-12">
                <i class="fas fa-search text-6xl text-gray-300 mb-4"></i>
                <h3 class="text-xl font-semibold text-gray-600 mb-2">No packages found</h3>
                <p class="text-gray-500">Try adjusting your search terms or browse all packages.</p>
                <button onclick="renderPackageList()" class="mt-4 bg-primary text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                    View All Packages
                </button>
            </div>
        `;
        return;
    }
    
    // Clear existing packages
    packagesContainer.innerHTML = '';
    
    // Update heading to show search results
    const heading = document.querySelector('h1');
    heading.textContent = `Search Results for "${query}" (${filteredPackages.length} found)`;
    
    // Render filtered packages (reuse the same package card creation logic)
    filteredPackages.forEach(pkg => {
        const packageCard = document.createElement('div');
        packageCard.className = 'package-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col';
        
        const stars = Array.from({ length: 5 }, (_, i) => 
            i < Math.floor(pkg.rating) ? 
            '<i class="fas fa-star text-yellow-400"></i>' : 
            (i < pkg.rating ? '<i class="fas fa-star-half-alt text-yellow-400"></i>' : '<i class="far fa-star text-yellow-400"></i>')
        ).join('');
        
        packageCard.innerHTML = `
            <div class="relative flex-shrink-0">
                <img src="${pkg.image}" alt="${pkg.title}" class="w-full h-48 object-cover">
                <span class="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    ${pkg.region}
                </span>
            </div>
            <div class="p-5 flex flex-col flex-grow">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-xl font-bold text-gray-800 flex-grow">${pkg.title}</h3>
                    <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded font-semibold ml-2 flex-shrink-0">${pkg.duration}</span>
                </div>
                
                <div class="flex items-center mb-3">
                    <div class="mr-2 flex">
                        ${stars}
                    </div>
                    <span class="text-sm text-gray-600">${pkg.rating} (${pkg.reviews} reviews)</span>
                </div>
                
                <p class="text-gray-600 mb-4 flex-grow">${pkg.description}</p>
                
                <div class="mb-4">
                    <h4 class="font-semibold text-gray-800 mb-2">Tour Highlights:</h4>
                    <ul class="space-y-1 text-sm">
                        ${pkg.highlights.slice(0, 4).map(highlight => `
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-primary mr-2 text-xs mt-1 flex-shrink-0"></i>
                                <span class="leading-tight">${highlight}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
                
                <div class="flex justify-between items-center mt-auto pt-4">
                    <span class="text-2xl font-bold text-primary">${pkg.price}</span>
                    <button class="view-package-btn bg-primary hover:bg-orange-700 text-white py-2 px-4 rounded-lg transition-colors duration-300" data-id="${pkg.id}">
                        View Details
                    </button>
                </div>
            </div>
        `;
        
        packagesContainer.appendChild(packageCard);
    });
    
    // Re-add event listeners to view buttons
    document.querySelectorAll('.view-package-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const packageId = parseInt(e.target.getAttribute('data-id'));
            renderPackageDetails(packageId);
        });
    });
}

// Sort functionality
function setupSorting() {
    const sortSelect = document.querySelector('select');
    sortSelect.addEventListener('change', (e) => {
        const sortBy = e.target.value;
        let sortedPackages = [...packages];
        
        switch(sortBy) {
            case 'Price: Low to High':
                sortedPackages.sort((a, b) => parseInt(a.price.replace('$', '')) - parseInt(b.price.replace('$', '')));
                break;
            case 'Price: High to Low':
                sortedPackages.sort((a, b) => parseInt(b.price.replace('$', '')) - parseInt(a.price.replace('$', '')));
                break;
            case 'Duration: Short to Long':
                sortedPackages.sort((a, b) => parseInt(a.duration) - parseInt(b.duration));
                break;
            default: // Most Popular
                sortedPackages.sort((a, b) => b.rating - a.rating);
        }
        
        renderSortedPackages(sortedPackages);
    });
}

// Render sorted packages
function renderSortedPackages(sortedPackages) {
    const packagesContainer = document.getElementById('packagesContainer');
    packagesContainer.innerHTML = '';
    
    sortedPackages.forEach(pkg => {
        const packageCard = document.createElement('div');
        packageCard.className = 'package-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col';
        
        const stars = Array.from({ length: 5 }, (_, i) => 
            i < Math.floor(pkg.rating) ? 
            '<i class="fas fa-star text-yellow-400"></i>' : 
            (i < pkg.rating ? '<i class="fas fa-star-half-alt text-yellow-400"></i>' : '<i class="far fa-star text-yellow-400"></i>')
        ).join('');
        
        packageCard.innerHTML = `
            <div class="relative flex-shrink-0">
                <img src="${pkg.image}" alt="${pkg.title}" class="w-full h-48 object-cover">
                <span class="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    ${pkg.region}
                </span>
            </div>
            <div class="p-5 flex flex-col flex-grow">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-xl font-bold text-gray-800 flex-grow">${pkg.title}</h3>
                    <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded font-semibold ml-2 flex-shrink-0">${pkg.duration}</span>
                </div>
                
                <div class="flex items-center mb-3">
                    <div class="mr-2 flex">
                        ${stars}
                    </div>
                    <span class="text-sm text-gray-600">${pkg.rating} (${pkg.reviews} reviews)</span>
                </div>
                
                <p class="text-gray-600 mb-4 flex-grow">${pkg.description}</p>
                
                <div class="mb-4">
                    <h4 class="font-semibold text-gray-800 mb-2">Tour Highlights:</h4>
                    <ul class="space-y-1 text-sm">
                        ${pkg.highlights.slice(0, 4).map(highlight => `
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-primary mr-2 text-xs mt-1 flex-shrink-0"></i>
                                <span class="leading-tight">${highlight}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
                
                <div class="flex justify-between items-center mt-auto pt-4">
                    <span class="text-2xl font-bold text-primary">${pkg.price}</span>
                    <button class="view-package-btn bg-primary hover:bg-orange-700 text-white py-2 px-4 rounded-lg transition-colors duration-300" data-id="${pkg.id}">
                        View Details
                    </button>
                </div>
            </div>
        `;
        
        packagesContainer.appendChild(packageCard);
    });
    
    // Re-add event listeners
    document.querySelectorAll('.view-package-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const packageId = parseInt(e.target.getAttribute('data-id'));
            renderPackageDetails(packageId);
        });
    });
}

// Initialize search and sorting when package list is rendered
function initializeInteractions() {
    setTimeout(() => {
        setupSearch();
        setupSorting();
    }, 100);
}

// Update the renderPackageList function to include interactions
const originalRenderPackageList = renderPackageList;
renderPackageList = function() {
    originalRenderPackageList();
    initializeInteractions();
};

// Browser back/forward navigation
window.addEventListener('popstate', (e) => {
    if (e.state && e.state.view === 'package') {
        renderPackageDetails(e.state.packageId);
    } else {
        renderPackageList();
    }
});

// Update browser history when navigating
function updateHistory(view, packageId = null) {
    const state = { view };
    if (packageId) state.packageId = packageId;
    
    const url = packageId ? `#package-${packageId}` : '#packages';
    history.pushState(state, '', url);
}

// Smooth scrolling for better UX
function smoothScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add smooth scroll to navigation functions
const originalRenderPackageDetails = renderPackageDetails;
renderPackageDetails = function(packageId) {
    originalRenderPackageDetails(packageId);
    updateHistory('package', packageId);
    smoothScrollToTop();
};

const updatedRenderPackageList = renderPackageList;
renderPackageList = function() {
    updatedRenderPackageList();
    updateHistory('list');
    smoothScrollToTop();
};