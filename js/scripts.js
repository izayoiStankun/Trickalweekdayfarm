/*!
* Start Bootstrap - Bare v5.0.9 (https://startbootstrap.com/template/bare)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// JSON 데이터를 가져와서 테이블을 생성하는 함수
async function fetchAndGenerateTable(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        // 테이블 생성
        let table = document.createElement('table');
        table.setAttribute('border', '1');
        table.setAttribute('id', 'dataTable');
        table.setAttribute('data-sort-column', '');
        table.setAttribute('data-sort-order', 'asc');

        // 테이블 헤더 생성
        let thead = table.createTHead();
        let headerRow = thead.insertRow();
        
  // 테이블 바디 생성
  let tbody = table.createTBody();
  data.forEach((item, index) => {
      let row = tbody.insertRow();
  }
  )
      // JSON 데이터를 가져올 URL
const dataUrl = 'https://script.google.com/macros/s/AKfycbyj5NUU0DAvPqZ9YQuVEE1CeQgAJg8X9R4V8U8_ow7ZWG9LqQIKchjtvBRxwC-L7rKB/exec';

// 페이지 로드 시 테이블 생성
document.addEventListener('DOMContentLoaded', () => {
    fetchAndGenerateTable(dataUrl);
});
  }
 } catch (error) {
    console.error('Error fetching data:', error);
}


