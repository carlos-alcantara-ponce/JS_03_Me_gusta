function faddlike(numfeed) {

    if (numfeed == 1) {
        var t_num_likes_1 = document.querySelector("#num_likes_1");
        var n_num_likes_1 = Number(t_num_likes_1.innerHTML);
        n_num_likes_1++;
        t_num_likes_1.innerHTML = String(n_num_likes_1);

    }
    else if (numfeed == 2) {
        var t_num_likes_2 = document.querySelector("#num_likes_2");
        var n_num_likes_2 = Number(t_num_likes_2.innerHTML);
        n_num_likes_2++;
        t_num_likes_2.innerHTML = String(n_num_likes_2);

    }
    else if (numfeed == 3) {
        var t_num_likes_3 = document.querySelector("#num_likes_3");
        var n_num_likes_3 = Number(t_num_likes_3.innerHTML);
        n_num_likes_3++;
        t_num_likes_3.innerHTML = String(n_num_likes_3);

    }
};