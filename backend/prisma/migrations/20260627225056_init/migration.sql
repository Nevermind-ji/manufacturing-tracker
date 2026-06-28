-- CreateTable
CREATE TABLE "machines" (
    "id" TEXT NOT NULL,
    "qr_code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "machines_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "parts" (
    "id" TEXT NOT NULL,
    "raw_barcode" TEXT NOT NULL,
    "supplier_code" TEXT NOT NULL,
    "part_code" TEXT NOT NULL,
    "date_raw" TEXT NOT NULL,
    "serial_no" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'available',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "parts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "operators" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "operators_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "assembly_sessions" (
    "id" TEXT NOT NULL,
    "machine_id" TEXT NOT NULL,
    "operator_id" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'open',
    "started_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finished_at" TIMESTAMP(3),

    CONSTRAINT "assembly_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "assembly_part_links" (
    "id" TEXT NOT NULL,
    "session_id" TEXT NOT NULL,
    "machine_id" TEXT NOT NULL,
    "part_id" TEXT NOT NULL,
    "linked_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "assembly_part_links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "scan_events" (
    "id" TEXT NOT NULL,
    "session_id" TEXT NOT NULL,
    "operator_id" TEXT NOT NULL,
    "scanned_qr_code" TEXT NOT NULL,
    "result" TEXT NOT NULL,
    "failure_reason" TEXT,
    "scanned_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "scan_events_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "machines_qr_code_key" ON "machines"("qr_code");

-- CreateIndex
CREATE UNIQUE INDEX "parts_raw_barcode_key" ON "parts"("raw_barcode");

-- CreateIndex
CREATE UNIQUE INDEX "operators_email_key" ON "operators"("email");

-- CreateIndex
CREATE UNIQUE INDEX "assembly_part_links_session_id_part_id_key" ON "assembly_part_links"("session_id", "part_id");

-- AddForeignKey
ALTER TABLE "assembly_sessions" ADD CONSTRAINT "assembly_sessions_machine_id_fkey" FOREIGN KEY ("machine_id") REFERENCES "machines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assembly_sessions" ADD CONSTRAINT "assembly_sessions_operator_id_fkey" FOREIGN KEY ("operator_id") REFERENCES "operators"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assembly_part_links" ADD CONSTRAINT "assembly_part_links_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "assembly_sessions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assembly_part_links" ADD CONSTRAINT "assembly_part_links_part_id_fkey" FOREIGN KEY ("part_id") REFERENCES "parts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scan_events" ADD CONSTRAINT "scan_events_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "assembly_sessions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scan_events" ADD CONSTRAINT "scan_events_operator_id_fkey" FOREIGN KEY ("operator_id") REFERENCES "operators"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
