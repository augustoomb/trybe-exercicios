from G3000LoaderAdapter import G3000LoaderAdapter
from ReportAnalyzer import ReportAnalyzer

loader = G3000LoaderAdapter(g3000_loader)
# o analyzer do nosso sistema recebe o adaptador como qualquer outro loader
analyzer = ReportAnalyzer(loader)
analyzer.average() # Agora funcionará