function getMovie() {
    const opt = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZWU3ZjQ1YmRjY2Y4NjRhMzZhOTI0OWI1YWMxZjE2ZCIsInN1YiI6IjY0NzU5MmU1OTI0Y2U2MDBkY2IyZTkxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m49KWIFiHr2BXOcmipMXGN9FFkRpKu7lku7oB5Xkh18'
        }
    };
    // api 호출 -> json()으로 불러오기 -> 각 항목의 값들을 할당
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', opt)//, opt
        .then(response => response.json())
        .then(data => {
            let lists = data.results;
            // console.log(lists);
            // document.getElementById('movieInfo').empty();
            lists.forEach((movies) => {
                const img = 'https://image.tmdb.org/t/p/w500' + movies['poster_path'];
                const title = movies['title'];
                const va = movies['vote_average'];
                const overview = movies['overview'];
                const idA = movies['id'];
                // console.log(movies)

                //기존의 temp_html로 부르면 string으로 출력됨
                // -> Element를 각자 다 지정해줌 img는 그의 맞는 경로, text는 textContent로
                const card = document.createElement('div');
                const imgEle = document.createElement('img');
                const titleEle = document.createElement('h2');
                const vaEle = document.createElement('h5');
                const explEle = document.createElement('p');

                imgEle.src = img;
                titleEle.textContent = title;
                vaEle.textContent = va;
                explEle.textContent = overview;

                // 위 선언을 card에 append()로 끼워넣어줌 - 넣는 순서가 중요함
                card.append(imgEle, titleEle, vaEle, explEle);
                // 끼워넣어진 큰 틀의 card를 그대로 만들어놓은 자리인 movieInfo에 끼워넣어줌
                document.getElementById('movieInfo').append(card);

                //card 클릭시 alert창 팝업(해당 card의 id 보여주면서)
                card.addEventListener('click', () =>{
                    alert("That Movie's ID is : " + idA + " , Thank you");
                });
            })

            // 검색기능 try - 2
            // console.log(lists.length);
            // var searchBtn = document.querySelector('.btn-movie');
            // searchBtn.addEventListener('click', function(){
            //     // alert('p')
            //     for(let i = 0; i <= lists.length; i++){

            //         let listInner = lists; //각 카드의 배열을 선언 해줘
            //         let listTitle = listInner[i]['title']; //그 각 카드의 제목을 선언해주고
            //         // console.log(listTitle);

            //         const inputText = document.querySelector(".search-box").value;
            //         console.log(inputText)

            //         if(inputText == listTitle){ // 이 함수를 클릭하면 input에 입력된 것과 비교해서
            //             listTitle[i].style.display = "flex"; // 같으면 남겨줘
            //         } else {
            //             listTitle[i].style.display = "none"; // 다르면 diplay =  "none"해줘
            //         }
            //     }
            // })
///////////////////////////////////////////////////////////////////////////////////

          // filter 사용해서 input값이 들어있는 영화들 추출하는 filterMovies 함수 선언
          function filterMovies(movieTitle) {
              filterArr = lists.filter((item) =>
                item.title.toLowerCase().includes(movieTitle)
              );
              // console.log(filterArr);
              document.getElementById("movieInfo").innerHTML = "";
              filterArr.forEach((data) => {
                let title = data.title;
                let vote_average = data.vote_average;
                let overview = data.overview;
                let poster_path = data.poster_path;
                let id = data.id;
                let img_url = `https://image.tmdb.org/t/p/w300${poster_path}`;
                let temp_html = ``;
                //  "That Movie's ID is : " + idA + " , Thank you"
                temp_html = `<div onclick = alert("영화"+"id:"+"${id}")>
                              <div class ="newImg"><img src = ${img_url} /></div>
                              <h5>${vote_average}</h5>
                              <h2>${title}</h2>
                              <p>${overview}</p>
                          </div>`;
                document.getElementById("movieInfo").innerHTML += temp_html;
              });
            }
                // 영화 타이틀에서 입력한 글자가 있으면 그 글자만 따로 배열을 받아 다시 화면에 띄우기
                // input 값과 button값을 받아서 변수에 할당
                const searchInput = document.querySelector("#inputBox");
                const searchButton = document.querySelector(".btn-movie");
                // user가 입력한 input값을 받는 btnClick 함수 선언
                function btnClickDisplay() {
                  let movieTitle = searchInput.value.toLowerCase().trim();
                  if (movieTitle === "") {
                    alert("Please write movie title");
                  } else if (movieTitle.length > 50) {
                    alert("your movie title is too long");
                  } else {
                    // filter 사용해서 input값이 들어있는 영화들 추출하는 filterMovies 함수 호출
                    filterMovies(movieTitle);
                  }
                }
                // Enter 입력시 button 클릭 호출
                searchInput.addEventListener("keyup", function(e){
                  if(e.code === 'Enter'){
                    searchButton.click();
                  }
                })
                // button 클릭 시 이벤트 btnClick 함수 호출
                searchButton.addEventListener("click", btnClickDisplay);
                  })

                  .catch(err => console.error(err));
              }

        // 검색기능 try - 1
        // console.log(lists);
    
        // const inputValue = document.getElementById("inputBox").value.toLowerCase();
        // console.log(inputValue);

        // const searchOn = document.querySelector('')

            // filteredMovies
            
            // function searc() {
            //     let text = document.getElementById("inputBox").value;
            //     text = parselnt(text);

            //     let res = title.find((element) => {
            //         return element === text;
            //     });
            //     if(res === )
            // }
    // }
    getMovie();

