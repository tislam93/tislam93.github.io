# Counts the BibTeX entries in _bibliography/papers.bib and exposes the total
# as site.publications_count, so the homepage "Publications" stat tracks the
# bibliography automatically instead of being hardcoded.
module Jekyll
  class PublicationsCounter < Generator
    safe true
    priority :low

    def generate(site)
      bib_path = File.join(site.source, "_bibliography", "papers.bib")
      count = 0
      if File.exist?(bib_path)
        contents = File.read(bib_path)
        # Match entry definitions like "@article{" or "@inproceedings{",
        # while skipping non-entry directives (@comment, @string, @preamble).
        count = contents.scan(/^@(?!comment\b|string\b|preamble\b)\w+\s*\{/i).length
      end
      site.config["publications_count"] = count
    end
  end
end
