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
        // 기본 테이블 행 생성
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

        // 삼각형 아이콘 추가
        const toggleCell = document.createElement('td');
        const toggleIcon = document.createElement('span');
        toggleIcon.textContent = '▼'; // 처음엔 닫힌 상태
        toggleIcon.style.cursor = 'pointer';
        toggleIcon.style.color = 'black'; 
        toggleCell.appendChild(toggleIcon);
        tr.appendChild(toggleCell);

        // "가입조건"과 "농장소개"를 포함하는 숨김 행 추가
        const detailsRow = document.createElement('tr');
        const detailsCell = document.createElement('td');
        detailsCell.colSpan = 5; // 전체 열을 차지하게 설정
        detailsCell.style.display = 'none'; // 처음에 숨김
        detailsCell.innerHTML = `
            <strong>가입조건:</strong> ${row['가입조건']}<br>
            <strong>농장 소개:</strong> ${row['농장 소개']}
        `;
        detailsRow.appendChild(detailsCell);

        // 삼각형 클릭 이벤트
        toggleIcon.addEventListener('click', () => {
            const isExpanded = detailsCell.style.display === 'table-cell';
            detailsCell.style.display = isExpanded ? 'none' : 'table-cell'; // 보이거나 숨기기
            toggleIcon.textContent = isExpanded ? '▼' : '▲'; // 아이콘 변경
        });

        // 테이블에 기본 행과 세부 정보 행 추가
        tableBody.appendChild(tr);
        tableBody.appendChild(detailsRow);
    });
}

    });
}
