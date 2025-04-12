

//this is for candiates section//
new Swiper('.container.swiper',  {
    loop: true,
    spaceBetween: 30, 

    // Pagination bullets
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullet: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive settings
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});


//partylist https://www.youtube.com/watch?v=DiE4jNcb734 //1017
const userIcon = document.querySelector('.accounts');
const loginMenu = document.getElementById('loginMenu');

userIcon.addEventListener('click', () => {
  loginMenu.classList.toggle('show');
});

// Optional: Close the menu if clicked outside
document.addEventListener('click', (e) => {
  if (!userIcon.contains(e.target) && !loginMenu.contains(e.target)) {
    loginMenu.classList.remove('show');
  }
});





// Wait for the page to load completely
window.addEventListener('load', () => {
    // Get the filter item container (all category buttons) and all images
    let filterItems = document.querySelector('.items-links');
    let partyImages = document.querySelectorAll('.party-img');

    // Function to show all images by default
    const showAllImages = () => {
        partyImages.forEach((img) => {
            img.style.display = 'block'; // Show all images
        });
    };

    // Function to handle category filtering
    const filterImages = (filter) => {
        partyImages.forEach((img) => {
            if (filter === 'all') {
                img.style.display = 'block'; // Show all images
            } else if (img.classList.contains(filter)) {
                img.style.display = 'block'; // Show images matching the category
            } else {
                img.style.display = 'none'; // Hide images that don't match
            }
        });
    };

    // Add click event listener to the filter item container
    filterItems.addEventListener('click', (event) => {
        // Check if the clicked element is a category button
        if (event.target.classList.contains('item-link')) {
            const filter = event.target.getAttribute('data-filter');

            // Remove 'menu-active' class from the previously active button
            let activeLink = document.querySelector('.menu-active');
            if (activeLink) {
                activeLink.classList.remove('menu-active');
            }

            // Add 'menu-active' to the clicked button
            event.target.classList.add('menu-active');

            // Apply the filter (either show all or specific category)
            filterImages(filter);
        }
    });

    // On page load, make sure the "ALL" button is active and all images are displayed
    let allButton = document.querySelector('.item-link[data-filter="all"]');
    if (allButton) {
        allButton.classList.add('menu-active'); // Make the "ALL" button active
    }

    showAllImages(); // Show all images when the page is loaded
});
