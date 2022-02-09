export class BookEntity {
    name!: string;
    authorId!: number;
    price!: number;
    coverImg!: string;

    constructor(
        name: string,
        authorId: number,
        price: number,
        coverImg: string,
    ) {
        this.name = name;
        this.authorId = authorId;
        this.price = price;
        this.coverImg = coverImg;
    }
}