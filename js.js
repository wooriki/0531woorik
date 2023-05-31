function getMovie() {
    const opt = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZWU3ZjQ1YmRjY2Y4NjRhMzZhOTI0OWI1YWMxZjE2ZCIsInN1YiI6IjY0NzU5MmU1OTI0Y2U2MDBkY2IyZTkxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m49KWIFiHr2BXOcmipMXGN9FFkRpKu7lku7oB5Xkh18'
        }
    };

    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', opt)//, opt
        .then(response => response.json())
        .then(data => {
            let lists = data.results
            // document.getElementById('movieInfo').empty();
            lists.forEach((a) => {
                const img = 'https://image.tmdb.org/t/p/w500' + a['poster_path'];
                const title = a['title'];
                const overview = a['overview'];
                const va = a['vote_average'];
                // console.log(img);
                const card = document.createElement('div');
                const imgEle = document.createElement('img');
                const titleEle = document.createElement('h2');
                const vaEle = document.createElement('h5');
                const explEle = document.createElement('p');
                imgEle.src = img;
                titleEle.textContent = title;
                vaEle.textContent = va;
                explEle.textContent = overview;

                card.append(imgEle);
                card.append(titleEle);
                card.append(vaEle);
                card.append(explEle);


                let temp_html = `<div class = "poster">
                                    <div>${img}</div>
                                    <h2>${title}</h2>
                                    <p>${overview}</p>
                                    <h5>${va}</h5>
                                </div>`
                document.getElementById('movieInfo').append(card);
            })

            // img = data.results[0].poster_path;
            // title = data.results[0].title;
            // overview = data.results[0].overview;

            // const movieInfo = document.getElementById("movieInfo")
            // movieInfo.appendChild(img);
            // movieInfo.appendChild(title);
            // movieInfo.appendChild(overview);
        })
        // .catch(err => console.error(err));
    }
    getMovie();


    // function q1(){
    //     return "";
    // }