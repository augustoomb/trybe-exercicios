import { RowDataPacket } from 'mysql2';
import conn from '../database/connection';
import Character from '../interfaces/character';
import { SimpleModel } from './model';

const DATABASE = 'cartoon';

export default class CharacterModel implements SimpleModel<Character> {

    constructor(private tableName: string = 'Characters', 
        private connection = conn) { }

    async create(obj: Character): Promise<void> {
        await this.connection.execute(`INSERT INTO ${DATABASE}.${this.tableName} (name) 
            VALUES (?);`, [obj.name])
    }

    async list(): Promise<Partial<Character>[]> {
       const result = await this.connection.execute(`SELECT id, name 
        FROM ${DATABASE}.${this.tableName};`);
       const [ characters ] = result;
       return characters as Character[];
    }

    async find(id: number): Promise<Partial<Character> | null> {
        const result = await this.connection.execute(`SELECT id, name 
        FROM ${DATABASE}.${this.tableName} AS C WHERE C.id = ?;`, [id]);
       const [ characters ] = result as RowDataPacket[];
       return characters[0] as Character;
    }
}