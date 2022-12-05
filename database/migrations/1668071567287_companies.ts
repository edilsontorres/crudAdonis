import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'companies'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.string('name').notNullable();
      table.dateTime('initial_date').nullable();
      table.dateTime('final_date').nullable();
      table.string('description', 100).nullable();
      table.boolean('is_done').defaultTo(false);
      table.integer('user_id').unsigned().references('id').inTable('users');

      table.timestamp('created_at', { useTz: true });
      table.timestamp('updated_at', { useTz: true });
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
