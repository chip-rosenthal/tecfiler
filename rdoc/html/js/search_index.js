var search_data = {"index":{"searchIndex":["nilclass","tecfiler","csvparser","importfile","model","coh","contribution","expenditure","spac","create_from_import_row()","create_from_import_row()","empty?()","line_validator()","line_validator()","new()","params_from_import_row()","params_from_import_row()","parse()","parse()","rec_type=()","recipient_type=()","shift()","validate_filename_extension()","validate_import_row()","validate_import_row()"],"longSearchIndex":["nilclass","tecfiler","tecfiler::csvparser","tecfiler::importfile","tecfiler::model","tecfiler::model::coh","tecfiler::model::contribution","tecfiler::model::expenditure","tecfiler::model::spac","tecfiler::model::contribution::create_from_import_row()","tecfiler::model::expenditure::create_from_import_row()","nilclass#empty?()","tecfiler::csvparser::line_validator()","tecfiler::csvparser#line_validator()","tecfiler::importfile::new()","tecfiler::model::contribution::params_from_import_row()","tecfiler::model::expenditure::params_from_import_row()","tecfiler::csvparser::parse()","tecfiler::csvparser#parse()","tecfiler::model::expenditure#rec_type=()","tecfiler::model::expenditure#recipient_type=()","tecfiler::importfile#shift()","tecfiler::csvparser#validate_filename_extension()","tecfiler::model::contribution::validate_import_row()","tecfiler::model::expenditure::validate_import_row()"],"info":[["NilClass","","NilClass.html","",""],["TECFiler","","TECFiler.html","",""],["TECFiler::CSVParser","","TECFiler/CSVParser.html","",""],["TECFiler::ImportFile","","TECFiler/ImportFile.html","","<p>Import TEC data from a CSV file.\n<p>Example:\n\n<pre>coh =  TECFiler::Model::COH.create( ... )\nTECFiler::ImportFile.each(file_contribs, ...</pre>\n"],["TECFiler::Model","","TECFiler/Model.html","",""],["TECFiler::Model::COH","","TECFiler/Model/COH.html","","<p>Represents a “Candidate/Office Holder Campaign Finance Report” (Form C/OH)\n<p>The source for this …\n"],["TECFiler::Model::Contribution","","TECFiler/Model/Contribution.html","","<p>TODO - document\n"],["TECFiler::Model::Expenditure","","TECFiler/Model/Expenditure.html","","<p>TODO - document\n"],["TECFiler::Model::SPAC","","TECFiler/Model/SPAC.html","","<p>TODO: comment\n<p>TODO: implement this class (right now it is just a dup of COH)\n"],["create_from_import_row","TECFiler::Model::Contribution","TECFiler/Model/Contribution.html#method-c-create_from_import_row","(row, coh)","<p>Create a new Contribution database record from an import table row. Follows\nthe semantics of create(): …\n"],["create_from_import_row","TECFiler::Model::Expenditure","TECFiler/Model/Expenditure.html#method-c-create_from_import_row","(row, coh)","<p>Create a new Expenditure database record from an import table row. Follows\nthe semantics of create(): …\n"],["empty?","NilClass","NilClass.html#method-i-empty-3F","()","<p>So obj.empty? works when obj is expected by hold a String value, but is\ncurrently unset.\n"],["line_validator","TECFiler::CSVParser","TECFiler/CSVParser.html#method-c-line_validator","(line, n_fields=nil)",""],["line_validator","TECFiler::CSVParser","TECFiler/CSVParser.html#method-i-line_validator","(line, n_fields=nil)","<p>a,“b”,“c”,d“,”e returns nil if valid otherwise error string\n"],["new","TECFiler::ImportFile","TECFiler/ImportFile.html#method-c-new","(data, options = {})","<p>Acts like CSV.new, with the following options added:\n<p>:import_type =&gt; Symbol – Supported values are …\n"],["params_from_import_row","TECFiler::Model::Contribution","TECFiler/Model/Contribution.html#method-c-params_from_import_row","(row, owner = nil)","<p>Construct a hash of parameters to create a new Contribution instance from\nan import table row.\n"],["params_from_import_row","TECFiler::Model::Expenditure","TECFiler/Model/Expenditure.html#method-c-params_from_import_row","(row, owner = nil)","<p>Construct a hash of parameters to create a new Expenditure instance from an\nimport table row.\n"],["parse","TECFiler::CSVParser","TECFiler/CSVParser.html#method-c-parse","(filename)",""],["parse","TECFiler::CSVParser","TECFiler/CSVParser.html#method-i-parse","(filename)",""],["rec_type=","TECFiler::Model::Expenditure","TECFiler/Model/Expenditure.html#method-i-rec_type-3D","(value)",""],["recipient_type=","TECFiler::Model::Expenditure","TECFiler/Model/Expenditure.html#method-i-recipient_type-3D","(value)",""],["shift","TECFiler::ImportFile","TECFiler/ImportFile.html#method-i-shift","()","<p>Wraps arount CSV#shift to implement our added options.\n"],["validate_filename_extension","TECFiler::CSVParser","TECFiler/CSVParser.html#method-i-validate_filename_extension","(filename)",""],["validate_import_row","TECFiler::Model::Contribution","TECFiler/Model/Contribution.html#method-c-validate_import_row","(row, scope = :default)","<p>Validate a Contribution import table row. Returns nil if row validates\nwithout problem. If validation …\n"],["validate_import_row","TECFiler::Model::Expenditure","TECFiler/Model/Expenditure.html#method-c-validate_import_row","(row, scope = :default)","<p>Validate a Expenditure import table row. Returns nil if row validates\nwithout problem. If validation …\n"]]}}