document.addEventListener('DOMContentLoaded', function() {
    fetch('https://script.google.com/macros/s/AKfycbzsuj0TmCmmnnQptByQmCpfLmMVSSQgGnfHmgRSQGO8x_-TYpWNAm1GelaX0k-KfOhe/exec')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            populateTable(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});

function populateTable(data) {
    const tableBody = document.getElementById('table-body');

    data.forEach(row => {
        const tr = document.createElement('tr');

        const farmnumbercell = document.createElement('td');
        farmnumbercell.textContent = row['농장번호']; 
        tr.appendChild(farmnumbercell);

        const farmNameCell = document.createElement('td');
        const farmLink = document.createElement('a');
        farmLink.textContent = row['농장이름'];
        farmLink.href = row['홍보글링크'];
        farmLink.target = '_blank';
        farmNameCell.appendChild(farmLink);
        tr.appendChild(farmNameCell);

        const farmowneracralive = document.createElement('td');
        const farmonwerLink = document.createElement('a');
        farmonwerLink.textContent = row['농장주 아카계정'];
        farmonwerLink.href = row['챈계정링크'];
        farmonwerLink.target = '_blank';
        farmowneracralive.appendChild(farmonwerLink);
        tr.appendChild(farmowneracralive);

        const farmownertrickal = document.createElement('td');
        farmownertrickal.textContent = row['농장주 이름'];
        tr.appendChild(farmownertrickal);

        // 가입조건과 농장소개는 숨김처리
        const farmenterence = document.createElement('td');
        farmenterence.textContent = row['가입조건']; 
        farmenterence.style.display = 'none'; // 처음에 숨김
        tr.appendChild(farmenterence);

        const farmintroduce = document.createElement('td');
        farmintroduce.textContent = row['농장 소개'];
        farmintroduce.style.display = 'none'; // 처음에 숨김
        tr.appendChild(farmintroduce);

        // 클릭 이벤트로 보이게 하기
        tr.addEventListener('click', () => {
            farmenterence.style.display = farmenterence.style.display === 'none' ? 'table-cell' : 'none';
            farmintroduce.style.display = farmintroduce.style.display === 'none' ? 'table-cell' : 'none';
        });

        tableBody.appendChild(tr);
    });
}
