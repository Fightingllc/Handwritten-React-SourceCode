let globalIndex = 0;
function useState() {
    const currentIndex = globalIndex;
    globalIndex++;

    function setState() {
        console.log(currentIndex);
    }

    return [setState];
}

const [setState] = useState();
setState();
const [setState2] = useState();
setState2();
setState();