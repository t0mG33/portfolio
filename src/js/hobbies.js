const filterHobbiesInterest = () => {

    let topics = [
        {
            'icon': 'bicycle',
            'text': 'Cycling',
            'type': 'hobby'
        },
        {
            'icon': 'fire',
            'text': 'Camping',
            'type': 'hobby'
        },
        {
            'icon': 'tree-fill',
            'text': 'Hiking',
            'type': 'hobby'
        },
        {
            'icon': 'book-half',
            'text': 'Reading',
            'type': 'hobby'
        },
        {
            'icon': 'headphones',
            'text': 'Podcasting',
            'type': 'interest'
        },
        {
            'icon': 'camera-reels-fill',
            'text': 'Movies',
            'type': 'interest'
        },
        {
            'icon': 'buildings',
            'text': 'Architecture',
            'type': 'interest'
        },
        {
            'icon': 'lightbulb-fill',
            'text': 'Learning',
            'type': 'interest'
        },
        {
            'icon': 'hourglass-split',
            'text': 'Cooking',
            'type': 'hobby'
        },
        {
            'icon': 'signpost-split-fill',
            'text': 'Travel',
            'type': 'hobby'
        },
        {
            'icon': 'music-note',
            'text': 'Music',
            'type': 'interest'
        },
        {
            'icon': 'piggy-bank-fill',
            'text': 'Personal Finance',
            'type': 'interest'
        },
        {
            'icon': 'tools',
            'text': 'DIY',
            'type': 'hobby'
        },
        {
            'icon': 'heart-pulse-fill',
            'text': 'Fitness',
            'type': 'hobby'
        },
        {
            'icon': 'camera-fill',
            'text': 'Photography',
            'type': 'interest'
        },
        {
            'icon': 'clock-history',
            'text': 'History',
            'type': 'interest'
        }
    ];

    let filterButtons = document.getElementsByClassName('js-filter-btn');

    for (let i = 0; i < filterButtons.length; i++) {
        filterButtons[i].addEventListener("click", function() {
            let hobbyItems = document.getElementsByClassName('hobby-items');
            switch(this.id) {
                case 'hobbies-only':
                    hide('js-interest');
                    break;
                case 'interests-only':
                    hide('js-hobby');
                    break;
                case 'show-all':
                    showAll();
                    break;
            }
    
            function hide(type) {
                for (let i=0; i<hobbyItems.length; i++) {
                    if (hobbyItems[i].classList.contains(type)) {
                        hobbyItems[i].classList.add('d-none')
                    } else {
                        if (hobbyItems[i].classList.contains('d-none')) {
                            hobbyItems[i].classList.remove('d-none')
                        }
                    }
                }
            }
    
            function showAll() {
                for (let i=0; i<hobbyItems.length; i++) {
                    if (hobbyItems[i].classList.contains('d-none')) {
                        hobbyItems[i].classList.remove('d-none')
                    }
                }
            }
        });
    }

    for (let i=0; i<topics.length; i++) {
        document.getElementById('hobbiesAndInterest').innerHTML += '<li class="hobby-items d-inline-block p-3 ' + setHobbyType(topics[i].type) + '"><div class="d-block w-auto m-auto text-center fs-2"><i class="bi bi-' + topics[i].icon + '"></i></div><p class="d-block text-center">' + topics[i].text + '</p></li>';
    }
    
    function setHobbyType(type) {
        switch(type) {
            case 'hobby':
                return 'js-hobby';
                break;
            case 'interest':
                return 'js-interest';
                break;
        }
    }
}

export default filterHobbiesInterest;