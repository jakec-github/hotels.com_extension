var $link1 = $('.nav-group-1 li:nth-child(4)'),
    $link2 = $('.nav-group-1 li:nth-child(5)'),
    $link3 = $('.nav-group-1 li:nth-child(6)'),
    $link4 = $('.nav-group-2 li:nth-child(2)'),
    $link5 = $('.nav-group-2 li:nth-child(3)'),
    $rewards = $('.welcome-rewards');

function hideElement($element){
  $element.css({'display': 'none'});
}

[$link1, $link2, $link4, $link5, $rewards].map(hideElement);
