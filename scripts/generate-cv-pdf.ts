import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import React from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import { CVPDFDocument } from "../src/components/cv-pdf";

const outputPath = resolve(process.cwd(), "public", "cv.pdf");

async function main() {
	const pdfBuffer = await renderToBuffer(React.createElement(CVPDFDocument));

	await mkdir(dirname(outputPath), { recursive: true });
	await writeFile(outputPath, pdfBuffer);

	console.log(`CV PDF gerado em ${outputPath}`);
}

main().catch((error) => {
	console.error("Falha ao gerar CV PDF:", error);
	process.exit(1);
});
