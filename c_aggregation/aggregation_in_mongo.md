In the aggregation framework, we think of stages instead of commands. And the stage "output" is documents. Documents go into a stage, some work is done, and documents come out. From there they can move onto another stage or provide output.
Syntax

Basic syntax of aggregate() method is as follows −

>db.COLLECTION_NAME.aggregate(AGGREGATE_OPERATION)
