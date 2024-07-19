const operation = async () => {
    const root = document.querySelector('.counter');
    const incBtn = root.querySelector(".plus");
    const decBtn = root.querySelector(".minus");
    const numEl = root.querySelector(".num");


    const updateNum = async () => {
        const { data } = await axios.get('/num');
        numEl.innerHTML = data;
    };

    await updateNum();

    incBtn.addEventListener("click", async () => {
        await axios.get('/inc');
        await updateNum();
    });

    decBtn.addEventListener("click", async () => {
        await axios.get('/dec');
        await updateNum();
    });
};

operation();