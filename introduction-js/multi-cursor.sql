-- SHORTCUT KEYBORD USE HEROS VIDEO 16 / 17 //

SELECT 
    CompanyCode, AgentId
FROM 
    UniqueAgentIdToUniqueAgentId un
WHERE 
    un.UniqueAgentId = 
       (SELECT UniqueAgentId 
        FROM 
            (SELECT q.LastChangeDate, a.UniqueAgentId 
             FROM QueueUpdates q, AgentProductTraining a 
             WHERE a.LastChangeDate >= q.LastChangeDate)
       )

SELECT CompanyCode, AgentId
FROM UniqueAgentIdToUniqueAgentId un
WHERE un.UniqueAgentId = 
      (SELECT UniqueAgentId 
       FROM (SELECT q.LastChangeDate, a.UniqueAgentId 
             FROM QueueUpdates q, AgentProductTraining a 
             WHERE a.LastChangeDate >= q.LastChangeDate
            ) t
      )


SELECT CompanyCode, AgentId
FROM UniqueAgentIdToUniqueAgentId un
WHERE un.UniqueAgentId in
      (SELECT UniqueAgentId 
       FROM QueueUpdates q, AgentProductTraining a 
       WHERE a.LastChangeDate >= q.LastChangeDate
      )