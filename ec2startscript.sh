#!/bin/bash

# Start Protractor instance
# webdriver-manager update

echo "Start Protractor instance"


protractor protractor.conf.js

# Copy test report to html
echo "Copy test reoprt to html"

 sudo cp ProtractorTestReport.html ../../html

# Send test report to slack channel
echo "Send test report to slack channel"

curl -X POST --data-urlencode "payload={\"channel\": \"#testreport\", \"username\": \"Test-automation\", \"text\": \"http://52.62.45.84/ProtractorTestReport.html\"}" https://hooks.slack.com/services/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
