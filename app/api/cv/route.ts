import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  renderToBuffer,
} from "@react-pdf/renderer";
import { cvData } from "@/data/cv-data";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
    fontSize: 10,
    lineHeight: 1.4,
    color: "#333",
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    paddingBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  title: {
    fontSize: 12,
    color: "#555",
    marginBottom: 8,
  },
  contactInfo: {
    fontSize: 9,
    color: "#666",
    marginBottom: 4,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,
  },
  summary: {
    marginBottom: 15,
    fontSize: 10,
    lineHeight: 1.5,
    color: "#444",
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 5,
    color: "#000",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 4,
  },
  entryHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  entryTitle: {
    fontWeight: "bold",
    fontSize: 10,
  },
  entrySubtitle: {
    color: "#555",
    fontSize: 9,
    fontWeight: "500",
  },
  entryPeriod: {
    fontSize: 9,
    color: "#666",
    fontStyle: "italic",
  },
  description: {
    fontSize: 9,
    marginBottom: 4,
    color: "#444",
    lineHeight: 1.4,
  },
  skillsList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 8,
  },
  skillTag: {
    backgroundColor: "#f0f0f0",
    padding: "3 6",
    borderRadius: 2,
    fontSize: 8,
    color: "#333",
  },
  footer: {
    marginTop: 15,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    fontSize: 8,
    textAlign: "center",
    color: "#999",
  },
});

function CVPDFDocument() {
  return React.createElement(
    Document,
    { title: `CV - ${cvData.personal.name}` },
    React.createElement(
      Page,
      { size: "A4", style: styles.page },
      // Header
      React.createElement(
        View,
        { style: styles.header },
        React.createElement(Text, { style: styles.name }, cvData.personal.name),
        React.createElement(Text, { style: styles.title }, cvData.personal.title),
        React.createElement(
          View,
          { style: styles.contactInfo },
          React.createElement(Text, null, cvData.personal.email),
          React.createElement(Text, null, cvData.personal.phone),
          React.createElement(Text, null, cvData.personal.location)
        )
      ),
      // Summary
      React.createElement(
        View,
        { style: styles.section },
        React.createElement(Text, { style: styles.summary }, cvData.summary)
      ),
      // Experience
      React.createElement(
        View,
        { style: styles.section },
        React.createElement(Text, { style: styles.sectionTitle }, "EXPERIÊNCIA PROFISSIONAL"),
        cvData.experience.map((exp, idx) =>
          React.createElement(
            View,
            { key: idx, style: { marginBottom: 10 } },
            React.createElement(
              View,
              { style: styles.entryHeader },
              React.createElement(
                View,
                null,
                React.createElement(Text, { style: styles.entryTitle }, exp.title),
                React.createElement(Text, { style: styles.entrySubtitle }, exp.company)
              ),
              React.createElement(Text, { style: styles.entryPeriod }, exp.period)
            ),
            React.createElement(Text, { style: styles.description }, exp.description),
            React.createElement(
              View,
              { style: styles.skillsList },
              exp.skills.map((skill, sidx) =>
                React.createElement(
                  Text,
                  { key: sidx, style: styles.skillTag },
                  skill
                )
              )
            )
          )
        )
      ),
      // Education
      React.createElement(
        View,
        { style: styles.section },
        React.createElement(Text, { style: styles.sectionTitle }, "EDUCAÇÃO"),
        cvData.education.map((edu, idx) =>
          React.createElement(
            View,
            { key: idx, style: { marginBottom: 8 } },
            React.createElement(
              View,
              { style: styles.entryHeader },
              React.createElement(
                View,
                null,
                React.createElement(Text, { style: styles.entryTitle }, edu.degree),
                React.createElement(
                  Text,
                  { style: styles.entrySubtitle },
                  edu.institution
                )
              ),
              React.createElement(Text, { style: styles.entryPeriod }, edu.year)
            ),
            edu.focus
              ? React.createElement(
                  Text,
                  { style: styles.description },
                  `Foco: ${edu.focus}`
                )
              : null
          )
        )
      ),
      // Skills
      React.createElement(
        View,
        { style: styles.section },
        React.createElement(Text, { style: styles.sectionTitle }, "COMPETÊNCIAS TÉCNICAS"),
        React.createElement(
          View,
          null,
          React.createElement(
            Text,
            { style: { fontWeight: "bold", fontSize: 9, marginBottom: 4 } },
            "Backend"
          ),
          React.createElement(
            View,
            { style: styles.skillsList },
            cvData.skills.backend.map((skill, idx) =>
              React.createElement(Text, { key: idx, style: styles.skillTag }, skill)
            )
          ),
          React.createElement(
            Text,
            { style: { fontWeight: "bold", fontSize: 9, marginBottom: 4, marginTop: 8 } },
            "Frontend"
          ),
          React.createElement(
            View,
            { style: styles.skillsList },
            cvData.skills.frontend.map((skill, idx) =>
              React.createElement(Text, { key: idx, style: styles.skillTag }, skill)
            )
          ),
          React.createElement(
            Text,
            { style: { fontWeight: "bold", fontSize: 9, marginBottom: 4, marginTop: 8 } },
            "DevOps & Cloud"
          ),
          React.createElement(
            View,
            { style: styles.skillsList },
            cvData.skills.devops.map((skill, idx) =>
              React.createElement(Text, { key: idx, style: styles.skillTag }, skill)
            )
          )
        )
      ),
      // Languages
      React.createElement(
        View,
        { style: styles.section },
        React.createElement(Text, { style: styles.sectionTitle }, "IDIOMAS"),
        cvData.languages.map((lang, idx) =>
          React.createElement(
            Text,
            { key: idx, style: styles.description },
            `${lang.language}: ${lang.level}`
          )
        )
      ),
      // Footer
      React.createElement(
        View,
        { style: styles.footer },
        React.createElement(
          Text,
          null,
          `${cvData.personal.website} | ${cvData.personal.github}`
        )
      )
    )
  );
}

export async function GET() {
  try {
    const pdfBuffer = (await renderToBuffer(CVPDFDocument())) as Buffer;

    return new Response(pdfBuffer as any, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Belicio-Cardoso-CV.pdf"',
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error) {
    console.error("Erro ao gerar PDF:", error);
    return new Response("Erro ao gerar CV em PDF", { status: 500 });
  }
}
