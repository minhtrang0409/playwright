export default class Animal {

    // Dùng protected với thuộc tính chỉ cho phép lớp con truy cập 
    protected name: string;
    protected speed: number;

    //Constructor là 1 hàm đặc biệt khởi tạo trong class đó

    constructor (name: string, maxSpeed: number) {
        this.name = name;
        this.speed = Math.floor(Math.random() * maxSpeed);
    }

    public getName(): string {
        return this.name;
    }
    public getSpeed(): number {
        return this.speed;
    }




}