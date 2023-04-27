// 這邊的code會被送到前端執行
export const getOneTripData = async (id) => {
  if (id) {
    console.log('make api call of trip id:', id);
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        tripId: id,
        type: 'require passengers',
        origin: 'taipei',
        destination: 'kaohsiung',
        date: '2023/5/1',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => json);
  }
};
