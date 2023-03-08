-- CreateTable
CREATE TABLE "Companies" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "marketcap" INTEGER,
    "website" TEXT,
    "telephone" INTEGER NOT NULL,

    CONSTRAINT "Companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Jobs" (
    "id" SERIAL NOT NULL,
    "jobPosition" TEXT NOT NULL,
    "education" TEXT,
    "TOEIC" DOUBLE PRECISION,
    "GPAX" DOUBLE PRECISION,
    "salary" DOUBLE PRECISION,
    "jobrequirement" TEXT NOT NULL,
    "availablecount" INTEGER NOT NULL,
    "companyID" INTEGER NOT NULL,

    CONSTRAINT "Jobs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Companies_email_key" ON "Companies"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Companies_website_key" ON "Companies"("website");

-- CreateIndex
CREATE UNIQUE INDEX "Companies_telephone_key" ON "Companies"("telephone");

-- AddForeignKey
ALTER TABLE "Jobs" ADD CONSTRAINT "Jobs_companyID_fkey" FOREIGN KEY ("companyID") REFERENCES "Companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
