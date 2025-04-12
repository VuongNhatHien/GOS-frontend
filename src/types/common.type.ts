export type ResponseType<T> = {
    data: T | null;
    status: number;
    code: string;
};