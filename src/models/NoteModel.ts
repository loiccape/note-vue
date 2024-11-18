export default class NoteModel {
    title: string;
    tags: string[];
    lastEdited: Date;
    content: string;
  
    constructor(title: string, tags: string[], lastEdited: Date, content: string) {
      this.title = title;
      this.tags = tags;
      this.lastEdited = lastEdited;
      this.content = content;
    }
  
    // Méthode pour créer une instance de NoteModel à partir d'un objet JSON
    static fromJSON(json: any): NoteModel {
      return new NoteModel(
        json.title,
        json.tags,
        new Date(json.lastEdited),
        json.content
      );
    }
  }
  