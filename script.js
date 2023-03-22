let activeSlideIndex = 0;
const slideCount = document.querySelectorAll(".slide").length;
const window_container = document.querySelector(".window_container");

function changeSlide(direction) {
  console.log(direction);
  console.log(activeSlideIndex);

  if (direction === "up") {
    if (activeSlideIndex >= slideCount - 2) {
      up_button.classList.add("hidden");
    }
    // console.log(document.querySelector("#slide" + activeSlideIndex));

    document
      .querySelector("#slide" + activeSlideIndex)
      .classList.remove("appearance");
    if (++activeSlideIndex == 1) {
      down_button.classList.remove("hidden");
    }
  }
  if (direction === "down") {
    if (activeSlideIndex == 1) {
      down_button.classList.add("hidden");
      //   return;
    }
    document
      .querySelector("#slide" + activeSlideIndex)
      .classList.remove("appearance");

    if (--activeSlideIndex == slideCount - 2) {
      up_button.classList.remove("hidden");
    }

    // activeSlideIndex--;
  }

  up_button.classList.remove("appearance");
  down_button.classList.remove("appearance");

  console.log(activeSlideIndex);

  console.log(document.querySelector("#slide" + activeSlideIndex));

  document
    .querySelector("#slide" + activeSlideIndex)
    .classList.add("appearance");

  for (line of g_grids.querySelectorAll("div")) {
    line.classList.remove("g_box");
  }
  for (line of v_grids.querySelectorAll("div")) {
    line.classList.remove("v_box");
  }

  const height = window_container.clientHeight;
  main_content.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  for (line of g_grids.querySelectorAll("div")) {
    line.classList.add("g_box");
  }
  for (line of v_grids.querySelectorAll("div")) {
    line.classList.add("v_box");
  }

  up_button.classList.add("appearance");
  down_button.classList.add("appearance");

  //   window_container.insertAdjacentHTML(
  //     "afterbegin",
  //     `<div id='grids'>
  //     <div class='v_grids'>
  //   <div class='v_box'></div>
  //   <div class='v_box'></div>
  //   <div class='v_box'></div>
  // </div>
  // <div class='g_grids'>
  //   <div class='g_box'></div>
  //   <div class='g_box'></div>
  //   <div class='g_box'></div>
  // </div>
  // </div>
  // </div>`
  //   );
}
