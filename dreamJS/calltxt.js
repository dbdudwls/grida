// fetch('json.txt')
//   .then(response => response.text())
//   .then(data => {
//     try {
//       const jsonData = JSON.parse(data);
//       console.log(jsonData);
//     } catch (parseError) {
//       console.error('JSON 파싱 중 오류가 발생했습니다.', parseError);
//     }
//   })
//   .catch(error => {
//     console.error('파일을 불러오는 중 오류가 발생했습니다.', error);
//   });

async function fetchData() {
    try {
      const response = await fetch('json.txt');
      if (!response.ok) {
        throw new Error('파일을 불러오는 중 오류가 발생했습니다.');
      }
      const data = await response.text();
      const jsonData = JSON.parse(data);
      console.log(jsonData);
    } catch (error) {
      console.error('오류가 발생했습니다.', error);
    }
  }
  
  fetchData();
  