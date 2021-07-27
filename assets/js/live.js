$(function() {
    // 定義要取得的影音內容，包含影像和聲音
    let constraints = {
        audio: true,
        video: true
    }

    // 請求開啟影音裝置
    navigator.mediaDevices.getUserMedia(constraints)
        .then(function(stream) {
            // 取得當前裝置的影音串流（stream）
        })
        .catch(function(error) {
            // 如果有錯誤發生
        });

    let inputVideo = document.querySelector('#camera-view');

    navigator.mediaDevices.getUserMedia(constraints)
        .then(function(stream) {
            inputVideo.srcObject = stream;
            inputVideo.controls = false; // 要不要顯示播放控制器
        })
        .catch(function(error) {
            console.log('some error occurred' + error);
        });

    inputVideo.addEventListener('loadedmetadata', e => {
        inputVideo.play();
    });
});