
// EFFECT FOR HELP BUTTON
const help_buttons = document.querySelectorAll('.help-button');

help_buttons.forEach((button) => {
    selected_inner_card = button.parentElement.parentElement.parentElement.parentElement
    card_back = selected_inner_card.querySelector('.card-back');

    button.addEventListener('click', () => {
        selected_inner_card.classList.add('card-inner-flipped');      
    });

    card_back.addEventListener('click', () => {
        selected_inner_card.classList.remove('card-inner-flipped');
    });
});


// EFFECT FOR CARDS
const automation_cards = document.querySelectorAll('.automation-card');

// FRONT OF CARD
automation_cards.forEach((automation_card) => {
    const card_cover = automation_card.querySelector('.card-cover');
    const card_heading = automation_card.querySelector('.card-heading');
    const card_content = automation_card.querySelector('.card-content');
    const card_inner = automation_card.querySelector('.card-inner');
    
    automation_card.addEventListener('mouseover', () => {
        card_cover.classList.add('card-cover-minimised');
        card_heading.classList.add('card-heading-expanded');
        card_content.classList.add('card-content-visible');
    });

    automation_card.addEventListener('mouseleave', () => {
        if (card_inner.classList.contains('card-inner-flipped')) {
            card_inner.classList.remove('card-inner-flipped');

            setTimeout(() => {
                card_cover.classList.remove('card-cover-minimised');
                card_heading.classList.remove('card-heading-expanded');
                card_content.classList.remove('card-content-visible');
            }, 400);

        } else {
            card_cover.classList.remove('card-cover-minimised');
            card_heading.classList.remove('card-heading-expanded');
            card_content.classList.remove('card-content-visible');
        }
    });
});



