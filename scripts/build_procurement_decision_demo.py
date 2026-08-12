from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor, white
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from pathlib import Path

pdfmetrics.registerFont(TTFont('RC-Sans', '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'))
pdfmetrics.registerFont(TTFont('RC-Sans-Bold', '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'))

OUT = Path(__file__).resolve().parents[1] / 'public/docs/Romaric_Clementi_Procurement_Decision_Supplier_Governance_Demo.pdf'
W,H=A4; M=44
BG=HexColor('#F4EFE5'); INK=HexColor('#111813'); MUTED=HexColor('#5F695E'); FOREST=HexColor('#0D2B25'); COPPER=HexColor('#A45237'); AMBER=HexColor('#D6A24C'); LIGHT=HexColor('#FCF9F2'); SAGE=HexColor('#DCE4DA'); LINE=HexColor('#D3CABB')
VERSION='1.8.5'

def wrap(text,font='RC-Sans',size=8,maxw=180):
    out=[]; cur=''
    for word in text.split():
        trial=word if not cur else cur+' '+word
        if stringWidth(trial,font,size)<=maxw: cur=trial
        else:
            if cur: out.append(cur)
            cur=word
    if cur: out.append(cur)
    return out

def text(c,s,x,y,w,font='RC-Sans',size=8,leading=9.5,color=INK,max_lines=None):
    lines=wrap(s,font,size,w)
    if max_lines: lines=lines[:max_lines]
    c.setFont(font,size); c.setFillColor(color)
    for line in lines: c.drawString(x,y,line); y-=leading
    return y

def box(c,x,y,w,h,fill=LIGHT,stroke=LINE,r=9):
    c.setFillColor(fill)
    if stroke: c.setStrokeColor(stroke); c.roundRect(x,y,w,h,r,fill=1,stroke=1)
    else: c.roundRect(x,y,w,h,r,fill=1,stroke=0)

def header(c,page):
    c.setFillColor(BG); c.rect(0,0,W,H,fill=1,stroke=0)
    c.setFillColor(INK); c.setFont('RC-Sans-Bold',10); c.drawString(M,H-35,'ROMARIC CLEMENTI')
    c.setFillColor(MUTED); c.setFont('RC-Sans',7); c.drawString(M,H-47,'Technical Procurement | ERP | Operational Improvement')
    c.setFillColor(FOREST); c.roundRect(W-M-32,H-54,32,24,6,fill=1,stroke=0); c.setFillColor(white); c.setFont('RC-Sans-Bold',9); c.drawCentredString(W-M-16,H-45,'RC')
    c.setStrokeColor(LINE); c.line(M,H-68,W-M,H-68)
    c.setFillColor(MUTED); c.setFont('RC-Sans',6.5); c.drawString(M,22,'Illustrative demonstration data - no former employer records reproduced'); c.drawRightString(W-M,22,f'V{VERSION} | {page}/3')

def label(c,s,x,y): c.setFillColor(COPPER); c.setFont('RC-Sans-Bold',7); c.drawString(x,y,s.upper())

def page1(c):
    header(c,1); y=H-99
    label(c,'Sourcing and supplier decision demo',M,y); y-=28
    c.setFillColor(INK); c.setFont('RC-Sans-Bold',20); c.drawString(M,y,'Supplier performance, risk and commercial'); y-=24; c.drawString(M,y,'terms in one clear decision view.'); y-=25
    y=text(c,'This example shows how performance, capacity, commercial conditions, risk, ownership and next actions can be organised for review. All supplier codes, values and percentages are illustrative. The documented evidence behind the model includes 30+ suppliers, 2,000+ ERP records and one commercial-data issue affecting 100+ items.',M,y,W-2*M,size=8.8,leading=10.5,color=MUTED)-14
    box(c,M,y-26,W-2*M,26,HexColor('#FFF2D8'),COPPER,8)
    c.setFillColor(COPPER); c.setFont('RC-Sans-Bold',7.2); c.drawCentredString(W/2,y-16,'ILLUSTRATIVE DEMONSTRATION DATA - NOT FORMER EMPLOYER RESULTS')
    y-=38
    gap=7; mw=(W-2*M-gap*3)/4
    metrics=[('4','sourcing areas reviewed'),('4','supplier exceptions'),('6','decision actions'),('1','structured review model')]
    for i,(v,l) in enumerate(metrics):
        x=M+i*(mw+gap); box(c,x,y-43,mw,43,FOREST if i==0 else LIGHT,None if i==0 else LINE,9); c.setFillColor(AMBER if i==0 else FOREST); c.setFont('RC-Sans-Bold',13); c.drawString(x+9,y-20,v); text(c,l,x+9,y-32,mw-18,size=6.4,leading=7,color=HexColor('#C9D2CC') if i==0 else MUTED,max_lines=2)
    y-=66
    label(c,'1. Sourcing view: evidence to decision',M,y); y-=12
    cols=[74,72,155,199]; x=M
    heads=['Area','Relative share','Supply / commercial signal','Decision input']
    c.setFillColor(FOREST); c.rect(M,y-24,sum(cols),24,fill=1,stroke=0)
    for h,w in zip(heads,cols): c.setFillColor(white); c.setFont('RC-Sans-Bold',6.7); c.drawString(x+6,y-15,h); x+=w
    rows=[
      ('Materials & components','High','High concentration; lead time rising; quality stable','Dual-source recurring items and validate capacity before peak demand.'),
      ('Surface / special processes','Medium','OTIF 86%; variable capacity; framework coverage 58%','Rebalance volume and negotiate capacity and call-off structure.'),
      ('Testing / inspection','Medium','Specialist capability; documentation-sensitive','Validate approved capability, evidence requirements and turnaround time.'),
      ('Recurring production needs','Low','Stable service; excess stock exposure','Adjust order cadence and minimum-stock logic.')]
    yy=y-24
    for r,row in enumerate(rows):
        h=46; c.setFillColor(LIGHT if r%2==0 else SAGE); c.rect(M,yy-h,sum(cols),h,fill=1,stroke=0); c.setStrokeColor(LINE); c.line(M,yy-h,W-M,yy-h)
        x=M
        for j,(val,w) in enumerate(zip(row,cols)):
            text(c,val,x+6,yy-14,w-12,font='RC-Sans-Bold' if j==0 else 'RC-Sans',size=6.4 if j!=1 else 6.6,leading=7.3,color=INK if j<2 else MUTED,max_lines=5)
            x+=w
        yy-=h
    y=yy-18
    label(c,'2. Exception-based supplier review',M,y); y-=12
    cols=[59,36,44,48,181,117]; x=M
    heads=['Supplier','OTIF','Lead','Cost signal','Risk / next action','Owner / due']
    c.setFillColor(FOREST); c.rect(M,y-22,sum(cols),22,fill=1,stroke=0)
    for h,w in zip(heads,cols): c.setFillColor(white); c.setFont('RC-Sans-Bold',6.2); c.drawString(x+5,y-14,h); x+=w
    rows=[
      ('SUP-A01','96%','8 wks','slight rise','Stable. Review contract coverage at renewal.','Buyer / 14 Aug'),
      ('SUP-B07','82%','12 wks','material rise','Capacity risk. Validate alternative and recovery plan.','Buyer + Ops / 7 Aug'),
      ('SUP-C03','90%','6 wks','small decline','Quality deviation open. Hold volume shift pending closure.','Quality / 5 Aug'),
      ('SUP-D11','98%','4 wks','stable','Potential preferred source for recurring low-risk demand.','Buyer / 21 Aug')]
    yy=y-22
    for r,row in enumerate(rows):
        h=33; c.setFillColor(LIGHT if r%2==0 else SAGE); c.rect(M,yy-h,sum(cols),h,fill=1,stroke=0); c.setStrokeColor(LINE); c.line(M,yy-h,W-M,yy-h); x=M
        for j,(val,w) in enumerate(zip(row,cols)):
            text(c,val,x+5,yy-13,w-10,font='RC-Sans-Bold' if j==0 else 'RC-Sans',size=6.0,leading=6.8,color=INK if j<4 else MUTED,max_lines=3); x+=w
        yy-=h
    y=yy-17
    bw=(W-2*M-8)/2
    box(c,M,y-58,bw,58,FOREST,None,10); c.setFillColor(AMBER); c.setFont('RC-Sans-Bold',6.8); c.drawString(M+10,y-17,'DECISION QUESTIONS'); text(c,'What changed? Is the source reliable? What is the impact? What must be decided? Who owns the action and by when?',M+10,y-33,bw-20,size=7.2,leading=8.4,color=white)
    box(c,M+bw+8,y-58,bw,58,LIGHT,LINE,10); c.setFillColor(COPPER); c.setFont('RC-Sans-Bold',6.8); c.drawString(M+bw+18,y-17,'CONTROL PRINCIPLE'); text(c,'A dashboard does not decide. It brings evidence, assumptions, exceptions, ownership and approval status into one place for review.',M+bw+18,y-33,bw-20,size=7.2,leading=8.4,color=MUTED)

def page2(c):
    header(c,2); y=H-99
    label(c,'Controlled analysis and responsible technology',M,y); y-=28
    c.setFillColor(INK); c.setFont('RC-Sans-Bold',20); c.drawString(M,y,'Technology supports the workflow.'); y-=24; c.setFillColor(FOREST); c.drawString(M,y,'The decision stays with a person.'); y-=25
    y=text(c,'A simple way to use reporting, automation or AI to speed up preparation without giving up source checks, commercial judgement, supplier selection or final human approval.',M,y,W-2*M,size=8.8,leading=10.4,color=MUTED)-14
    label(c,'Controlled workflow',M,y); y-=12
    steps=[
      ('01','Purpose','Define the task, decision and expected benefit.'),
      ('02','Approved inputs','Use current ERP extracts, contracts, supplier submissions and named assumptions.'),
      ('03','Data limits','Check date, owner, units and completeness; keep restricted data in approved systems.'),
      ('04','Analysis','Calculate spend, performance, concentration, coverage and scenario impacts.'),
      ('05','Optional AI support','Use for first-pass comparison, anomaly prompts or a draft summary only.'),
      ('06','Human decision','Validate facts, challenge assumptions, approve the recommendation and record action.')]
    sw=(W-2*M-10)/2; positions=[]
    for i in range(6): positions.append((M+(i%2)*(sw+10), y-70-(i//2)*80))
    for (x,yy),(n,t,b) in zip(positions,steps):
        fill=FOREST if n=='01' else LIGHT; box(c,x,yy,sw,70,fill,None if n=='01' else LINE,10); c.setFillColor(AMBER if n=='01' else COPPER); c.setFont('RC-Sans-Bold',6.4); c.drawString(x+9,yy+52,n); c.setFillColor(white if n=='01' else INK); c.setFont('RC-Sans-Bold',8.5); c.drawString(x+38,yy+51,t); text(c,b,x+9,yy+34,sw-18,size=6.9,leading=8.1,color=HexColor('#C9D2CC') if n=='01' else MUTED,max_lines=3)
    y-=255
    label(c,'Control boundaries',M,y); y-=12
    bw=(W-2*M-10)/2
    box(c,M,y-97,bw,97,SAGE,None,10); c.setFillColor(FOREST); c.setFont('RC-Sans-Bold',8.5); c.drawString(M+10,y-18,'Technology may support'); text(c,'Data preparation, classification, repeatable calculations, first-pass comparisons, anomaly prompts and draft summaries using approved information.',M+10,y-34,bw-20,size=7.4,leading=8.8,color=INK)
    box(c,M+bw+10,y-97,bw,97,FOREST,None,10); c.setFillColor(AMBER); c.setFont('RC-Sans-Bold',8.5); c.drawString(M+bw+20,y-18,'The decision stays human'); text(c,'Source acceptance, restricted-data handling, commercial assumptions, negotiation position, supplier recommendation, risk acceptance, contractual commitment and final approval.',M+bw+20,y-34,bw-20,size=7.4,leading=8.8,color=white)
    y-=120
    label(c,'Example management decision note',M,y); y-=12
    box(c,M,y-142,W-2*M,142,LIGHT,LINE,10)
    lines=[
      ('Situation','Supplier B07 lead time and delivery reliability deteriorated while short-term coverage fell below the agreed buffer.'),
      ('Evidence','OTIF 82%, lead time 12 weeks, three open delays, 68% short-term coverage and one technically credible alternative.'),
      ('Recommendation','Protect immediate demand with a controlled split allocation; validate the alternative; negotiate a capacity and call-off recovery plan; avoid full transfer until qualification and total-cost assumptions are confirmed.'),
      ('Decision required','Approve validation cost, temporary allocation range and negotiation mandate.'),
      ('Follow-up','Named owners, due dates, assumptions, approvals and supplier communication recorded.')]
    yy=y-20
    for title,body in lines:
        c.setFillColor(COPPER); c.setFont('RC-Sans-Bold',6.8); c.drawString(M+11,yy,title.upper()); yy=text(c,body,M+96,yy,W-2*M-108,size=7.1,leading=8.4,color=MUTED,max_lines=3)-5
    y-=164
    box(c,M,y-46,W-2*M,46,FOREST,None,10); c.setFillColor(AMBER); c.setFont('RC-Sans-Bold',6.8); c.drawString(M+10,y-15,'WORKING RULE'); text(c,'I do not start with the tool. I start with the problem. The facts, responsible person and review point come first.',M+10,y-29,W-2*M-20,font='RC-Sans-Bold',size=7.8,leading=9.1,color=white)


def page3(c):
    header(c,3); y=H-99
    label(c,'Building toward broader sourcing responsibility',M,y); y-=28
    c.setFillColor(INK); c.setFont('RC-Sans-Bold',20); c.drawString(M,y,'How I would build on day-to-day procurement'); y-=24; c.setFillColor(FOREST); c.drawString(M,y,'to take on broader sourcing responsibility.'); y-=25
    y=text(c,'This is how I would build on documented buying, supplier follow-up, ERP discipline and production understanding when taking on broader sourcing responsibility. I have not held a formal Category Manager role.',M,y,W-2*M,size=8.8,leading=10.4,color=MUTED)-14
    label(c,'Six questions for a broader sourcing decision',M,y); y-=12
    steps=[
      ('01','Business need','What outcome matters, which requirements are fixed and what can be challenged?'),
      ('02','Supply risk','How critical, dependent, complex and difficult to replace is the supply?'),
      ('03','Beyond unit price','What do quality, logistics, inventory, working capital, lead time and switching cost add to the price?'),
      ('04','Sourcing approach','Should the route be competitive sourcing, dual source, framework, development, consolidation or exit?'),
      ('05','Review rules','Which terms, KPIs, review rhythm, owners, escalation paths and approval boundaries are needed?'),
      ('06','Value after award','How will delivery, quality, cost, inventory, risk reduction and improvement be tracked?')]
    sw=(W-2*M-10)/2; positions=[]
    for i in range(6): positions.append((M+(i%2)*(sw+10), y-72-(i//2)*82))
    for (x,yy),(n,t,b) in zip(positions,steps):
        fill=FOREST if n=='01' else LIGHT; box(c,x,yy,sw,72,fill,None if n=='01' else LINE,10)
        c.setFillColor(AMBER if n=='01' else COPPER); c.setFont('RC-Sans-Bold',6.4); c.drawString(x+9,yy+54,n)
        c.setFillColor(white if n=='01' else INK); c.setFont('RC-Sans-Bold',8.5); c.drawString(x+38,yy+53,t)
        text(c,b,x+9,yy+36,sw-18,size=6.9,leading=8.1,color=HexColor('#C9D2CC') if n=='01' else MUTED,max_lines=4)
    y-=262
    label(c,'Leadership in practice',M,y); y-=12
    bw=(W-2*M-10)/2
    cards=[
      ('Delegated decisions','Handled routine sourcing and supplier decisions within delegated authority; exceptional or high-risk commitments were escalated with evidence.'),
      ('Cross-functional coordination','Worked across Procurement, Engineering, Quality, Planning, Production, Warehouse and 30+ suppliers to keep priorities, risks and next actions aligned.'),
      ('Repeatable control','Used grouped setup and validation checks to create or validate 200+ complex structures in about two weeks.'),
      ('Continuity under pressure','Maintained critical supply and production-readiness follow-up for about three weeks during reduced team coverage.')]
    positions=[(M,y-68),(M+bw+10,y-68),(M,y-146),(M+bw+10,y-146)]
    for (x,yy),(title,body) in zip(positions,cards):
        box(c,x,yy,bw,68,LIGHT,LINE,10); c.setFillColor(FOREST); c.setFont('RC-Sans-Bold',8.5); c.drawString(x+10,yy+48,title); text(c,body,x+10,yy+33,bw-20,size=7.1,leading=8.4,color=MUTED,max_lines=4)
    y-=168
    box(c,M,y-60,W-2*M,60,FOREST,None,10)
    c.setFillColor(AMBER); c.setFont('RC-Sans-Bold',6.8); c.drawString(M+10,y-17,'PRACTICAL ADVANTAGE')
    text(c,'I understand how a sourcing decision reaches the ERP record, the supplier commitment, the material plan, the quality evidence and the production consequence.',M+10,y-34,W-2*M-20,font='RC-Sans-Bold',size=8.1,leading=9.4,color=white)

def build():
    OUT.parent.mkdir(parents=True,exist_ok=True)
    c=canvas.Canvas(str(OUT),pagesize=A4,pageCompression=1)
    c.setTitle(f'Romaric Clementi Sourcing Decision and Supplier Governance Demo V{VERSION}')
    c.setAuthor('Romaric Clementi')
    c.setSubject('Illustrative sourcing, supplier performance, decision review and responsible technology workflow')
    page1(c); c.showPage(); page2(c); c.showPage(); page3(c); c.showPage(); c.save(); print(OUT)

if __name__=='__main__': build()
