function solution(phone_book) {
    // 전화번호부를 사전 순서대로 정렬
    phone_book.sort();

    // 정렬된 전화번호부에서 인접한 번호들만 비교
    for (let i = 0; i < phone_book.length - 1; i++) {
        if (phone_book[i + 1].startsWith(phone_book[i])) {
            return false;
        }
    }

    return true;
}