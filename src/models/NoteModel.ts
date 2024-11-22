export default class NoteModel {
  id: string;
  title: string;
  tags: string[];
  lastEdited: Date;
  content: string;

  constructor(id: string, title: string, tags: string[], lastEdited: Date, content: string) {
    this.id = id;
    this.title = title;
    this.tags = tags;
    this.lastEdited = lastEdited;
    this.content = content;
  }

  // Méthode pour créer une instance de NoteModel à partir d'un objet JSON
  static fromJSON(json: any): NoteModel {
    return new NoteModel(json.id, json.title, json.tags, new Date(json.lastEdited), json.content);
  }

  // Méthode pour formater la date
  getFormattedDate(): string {
    return this.lastEdited.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  }
}
