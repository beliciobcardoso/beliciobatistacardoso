import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link as PDFLink,
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
    display: "flex",
    flexDirection: "row",
    gap: 15,
    marginBottom: 4,
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
  row: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 4,
  },
  column: {
    flex: 1,
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

export function CVPDFDocument() {
  return (
    <Document title={`CV - ${cvData.personal.name}`}>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{cvData.personal.name}</Text>
          <Text style={styles.title}>{cvData.personal.title}</Text>
          <View style={styles.contactInfo}>
            <Text>{cvData.personal.email}</Text>
            <Text>{cvData.personal.phone}</Text>
            <Text>{cvData.personal.location}</Text>
          </View>
        </View>

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.summary}>{cvData.summary}</Text>
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>EXPERIÊNCIA PROFISSIONAL</Text>
          {cvData.experience.map((exp, idx) => (
            <View key={idx} style={{ marginBottom: 10 }}>
              <View style={styles.entryHeader}>
                <View>
                  <Text style={styles.entryTitle}>{exp.title}</Text>
                  <Text style={styles.entrySubtitle}>{exp.company}</Text>
                </View>
                <Text style={styles.entryPeriod}>{exp.period}</Text>
              </View>
              <Text style={styles.description}>{exp.description}</Text>
              <View style={styles.skillsList}>
                {exp.skills.map((skill, sidx) => (
                  <Text key={sidx} style={styles.skillTag}>
                    {skill}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>EDUCAÇÃO</Text>
          {cvData.education.map((edu, idx) => (
            <View key={idx} style={{ marginBottom: 8 }}>
              <View style={styles.entryHeader}>
                <View>
                  <Text style={styles.entryTitle}>{edu.degree}</Text>
                  <Text style={styles.entrySubtitle}>{edu.institution}</Text>
                </View>
                <Text style={styles.entryPeriod}>{edu.year}</Text>
              </View>
              {edu.focus && (
                <Text style={styles.description}>Foco: {edu.focus}</Text>
              )}
            </View>
          ))}
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>COMPETÊNCIAS TÉCNICAS</Text>

          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={{ fontWeight: "bold", fontSize: 9, marginBottom: 4 }}>
                Backend
              </Text>
              <View style={styles.skillsList}>
                {cvData.skills.backend.map((skill, idx) => (
                  <Text key={idx} style={styles.skillTag}>
                    {skill}
                  </Text>
                ))}
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={{ fontWeight: "bold", fontSize: 9, marginBottom: 4 }}>
                Frontend
              </Text>
              <View style={styles.skillsList}>
                {cvData.skills.frontend.map((skill, idx) => (
                  <Text key={idx} style={styles.skillTag}>
                    {skill}
                  </Text>
                ))}
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={{ fontWeight: "bold", fontSize: 9, marginBottom: 4 }}>
                DevOps & Cloud
              </Text>
              <View style={styles.skillsList}>
                {cvData.skills.devops.map((skill, idx) => (
                  <Text key={idx} style={styles.skillTag}>
                    {skill}
                  </Text>
                ))}
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={{ fontWeight: "bold", fontSize: 9, marginBottom: 4 }}>
                Metodologias
              </Text>
              <View style={styles.skillsList}>
                {cvData.skills.methodologies.map((skill, idx) => (
                  <Text key={idx} style={styles.skillTag}>
                    {skill}
                  </Text>
                ))}
              </View>
            </View>
          </View>
        </View>

        {/* Languages */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>IDIOMAS</Text>
          {cvData.languages.map((lang, idx) => (
            <Text key={idx} style={styles.description}>
              {lang.language}: {lang.level}
            </Text>
          ))}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text>
            {cvData.personal.website} | {cvData.personal.github}
          </Text>
        </View>
      </Page>
    </Document>
  );
}
