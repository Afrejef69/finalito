import { MigrationInterface, QueryRunner } from 'typeorm';

export class ComposeMigration1717553591059 implements MigrationInterface {
  name = 'ComposeMigration1717553591059';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "routes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "description" character varying(255) NOT NULL, "origin" character varying(255) NOT NULL, "destination" character varying(255) NOT NULL, "intermediateStops" character varying(255) NOT NULL, "status" boolean NOT NULL, CONSTRAINT "PK_76100511cdfa1d013c859f01d8b" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "schedules" ("id" SERIAL NOT NULL, "departureTime" TIME NOT NULL, "arrivalTime" TIME NOT NULL, "frequency" character varying(255) NOT NULL, "daysofOperation" text, "routeId" uuid, CONSTRAINT "PK_7e33fc2ea755a5765e3564e66dd" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "schedules" ADD CONSTRAINT "FK_796dabf6a5077692672d42e704b" FOREIGN KEY ("routeId") REFERENCES "routes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "schedules" DROP CONSTRAINT "FK_796dabf6a5077692672d42e704b"`,
    );
    await queryRunner.query(`DROP TABLE "schedules"`);
    await queryRunner.query(`DROP TABLE "routes"`);
  }
}
