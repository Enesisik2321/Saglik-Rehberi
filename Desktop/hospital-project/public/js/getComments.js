document.addEventListener("DOMContentLoaded", function () {
  fetch("/comments/get")
    .then((response) => response.json())
    .then((comments) => {
      const doctorOneList = document.getElementById("doctor-1");
      const doctorTwoList = document.getElementById("doctor-2");
      const doctorThreeList = document.getElementById("doctor-3");

      comments.message.forEach((comment) => {
        const commentDiv = document.createElement("div"); // Yeni bir <div> oluştur

        // Div içeriğini oluştur
        commentDiv.innerHTML = `
  <div style="display:flex;flex-direction:column;padding:10px;border:1px solid #ccc;border-radius:5px;">
    <p style="margin-bottom: 5px;"><span style="font-weight:bold;color:#333;">Kullanıcı adı:</span> ${comment.username}</p>
    <p style="margin-bottom: 5px;"><span style="font-weight:bold;color:#333;">Başlık:</span> ${comment.title}</p>
    <p><span style="font-weight:bold;color:#333;">Yorum:</span> ${comment.text}</p>
  </div>
`;


        switch (comment.doctorId) {
          case "doctor-1":
            doctorOneList.appendChild(commentDiv); // Oluşturulan div'i ekleyin
            break;
          case "doctor-2":
            doctorTwoList.appendChild(commentDiv); // Oluşturulan div'i ekleyin
            break;
          case "doctor-3":
            doctorThreeList.appendChild(commentDiv); // Oluşturulan div'i ekleyin
            break;
          default:
            break;
        }
      });
    })
    .catch((err) => console.error("Error fetching comments:", err));
});
