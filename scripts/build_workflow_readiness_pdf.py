from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor, white
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from pathlib import Path

pdfmetrics.registerFont(TTFont('RC-Sans', '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'))
pdfmetrics.registerFont(TTFont('RC-Sans-Bold', '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'))

OUT = Path(__file__).resolve().parents[1] / 'public/docs/Romaric_Clementi_Workflow_Readiness_Portfolio.pdf'
W, H = A4
M = 48
BG = HexColor('#F4EFE5')
INK = HexColor('#111813')
MUTED = HexColor('#5F695E')
FOREST = HexColor('#0D2B25')
FOREST2 = HexColor('#143D34')
COPPER = HexColor('#A45237')
AMBER = HexColor('#D6A24C')
LIGHT = HexColor('#E8E1D3')
LIGHT2 = HexColor('#FCF9F2')
SAGE = HexColor('#DCE4DA')
LINE = HexColor('#D3CABB')
VERSION = '1.8.5.4'


def wrap_lines(text, font='RC-Sans', size=9.2, max_width=200):
    words = text.split()
    lines, current = [], ''
    for word in words:
        trial = word if not current else current + ' ' + word
        if stringWidth(trial, font, size) <= max_width:
            current = trial
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def draw_text(c, text, x, y, width, font='RC-Sans', size=9.2, leading=11, color=INK, max_lines=None):
    lines = wrap_lines(text, font, size, width)
    if max_lines:
        lines = lines[:max_lines]
    c.setFont(font, size)
    c.setFillColor(color)
    for line in lines:
        c.drawString(x, y, line)
        y -= leading
    return y


def background(c):
    c.setFillColor(BG)
    c.rect(0, 0, W, H, fill=1, stroke=0)


def header(c, page_no, section):
    background(c)
    c.setFillColor(INK)
    c.setFont('RC-Sans-Bold', 10.5)
    c.drawString(M, H - 37, 'ROMARIC CLEMENTI')
    c.setFillColor(MUTED)
    c.setFont('RC-Sans', 7.2)
    c.drawString(M, H - 49, 'Technical Procurement | Supply Planning | ERP')
    c.setFillColor(FOREST)
    c.roundRect(W - M - 34, H - 55, 34, 25, 7, fill=1, stroke=0)
    c.setFillColor(white)
    c.setFont('RC-Sans-Bold', 10)
    c.drawCentredString(W - M - 17, H - 46, 'RC')
    c.setStrokeColor(LINE)
    c.setLineWidth(.65)
    c.line(M, H - 70, W - M, H - 70)
    c.setFillColor(MUTED)
    c.setFont('RC-Sans', 6.7)
    c.drawString(M, 24, section)
    c.drawRightString(W - M, 24, f'Portfolio V{VERSION} | {page_no}/5')


def label(c, text, x, y, color=COPPER):
    c.setFillColor(color)
    c.setFont('RC-Sans-Bold', 7.2)
    c.drawString(x, y, text.upper())


def box(c, x, y, w, h, fill=LIGHT2, stroke=None, radius=12):
    c.setFillColor(fill)
    if stroke:
        c.setStrokeColor(stroke)
        c.roundRect(x, y, w, h, radius, fill=1, stroke=1)
    else:
        c.roundRect(x, y, w, h, radius, fill=1, stroke=0)


def metric(c, x, y, w, value, text, dark=False):
    box(c, x, y, w, 46, FOREST if dark else LIGHT2, LINE if not dark else None, 10)
    c.setFillColor(AMBER if dark else FOREST)
    c.setFont('RC-Sans-Bold', 16)
    c.drawString(x + 10, y + 25, value)
    c.setFillColor(HexColor('#C8D0CA') if dark else MUTED)
    c.setFont('RC-Sans', 6.7)
    draw_text(c, text, x + 10, y + 13, w - 18, size=6.7, leading=7.4, color=HexColor('#C8D0CA') if dark else MUTED, max_lines=2)


def card(c, x, y, w, h, title, body, fill=LIGHT2, title_color=INK, body_color=MUTED, accent=None, title_size=9.2, body_size=7.7):
    box(c, x, y, w, h, fill, LINE if fill == LIGHT2 else None, 11)
    if accent:
        c.setFillColor(accent)
        c.roundRect(x, y, 4, h, 2, fill=1, stroke=0)
    c.setFillColor(title_color)
    c.setFont('RC-Sans-Bold', title_size)
    c.drawString(x + 11, y + h - 18, title)
    draw_text(c, body, x + 11, y + h - 32, w - 22, size=body_size, leading=9.1, color=body_color)


def page1(c):
    header(c, 1, 'Positioning and working principles')
    y = H - 103
    label(c, 'Technical procurement, supply planning and ERP', M, y)
    y -= 29
    c.setFillColor(INK)
    c.setFont('RC-Sans-Bold', 21.5)
    c.drawString(M, y, 'I connect purchasing decisions,')
    y -= 24
    c.drawString(M, y, 'material plans and ERP data')
    y -= 24
    c.setFillColor(FOREST2)
    c.drawString(M, y, 'to keep production ready.')
    y -= 25
    lead = ('I spot supply risks early and make sure the right action is followed through before production is affected.')
    y = draw_text(c, lead, M, y, W - 2*M, font='RC-Sans-Bold', size=10.6, leading=12.6, color=INK) - 12
    support = ('I look beyond the purchase order to delivery, cost, quality, data accuracy, documentation and production impact, then keep the next action clear and followed through. '
               'I make sure the next action is clear and followed through.')
    y = draw_text(c, support, M, y, W - 2*M, size=9.1, leading=11.0, color=MUTED) - 15

    gap = 7
    mw = (W - 2*M - gap*3) / 4
    data = [
        ('2,000+', 'ERP and master-data records'),
        ('200+', 'complex product/BOM structures'),
        ('30+', 'international suppliers'),
        ('100+', 'items with conflicting cost and sales-price data identified before a major quotation')
    ]
    for i, (v, t) in enumerate(data):
        metric(c, M + i*(mw + gap), y - 46, mw, v, t, dark=(i == 0))
    y -= 72

    label(c, 'Three working principles', M, y)
    y -= 14
    pw = (W - 2*M - 16) / 3
    principles = [
        ('01', 'I keep the whole flow visible.', 'I connect supplier timing, material status, ERP data, quality evidence and production priorities so problems are easier to see before they become disruptions.'),
        ('02', "Careful is not a system.", 'Being careful is not enough. I want to know which information we trust, who owns the decision and how we make sure the issue is followed through.'),
        ('03', 'I do not start with the tool.', 'I start with the problem. If technology makes the work clearer, faster or more reliable, it has a purpose; otherwise I keep the process simple.')
    ]
    for i, (n, title, body) in enumerate(principles):
        x = M + i*(pw + 8)
        fill = FOREST if i == 0 else (SAGE if i == 2 else LIGHT2)
        box(c, x, y - 154, pw, 154, fill, None if i != 1 else LINE, 12)
        c.setFillColor(AMBER if i == 0 else COPPER)
        c.setFont('RC-Sans-Bold', 7)
        c.drawString(x + 11, y - 17, n)
        c.setFillColor(white if i == 0 else INK)
        c.setFont('RC-Sans-Bold', 12.2)
        title_y = draw_text(c, title, x + 11, y - 40, pw - 22, font='RC-Sans-Bold', size=12.2, leading=13.4, color=white if i == 0 else INK)
        draw_text(c, body, x + 11, min(title_y - 10, y - 83), pw - 22, size=7.7, leading=9.1, color=HexColor('#CDD5D0') if i == 0 else MUTED)

    y -= 179
    box(c, M, y - 62, W - 2*M, 62, FOREST)
    c.setFillColor(AMBER)
    c.setFont('RC-Sans-Bold', 7.2)
    c.drawString(M + 12, y - 17, 'SIGNATURE VALUE')
    draw_text(c, 'Spot operational risk early, make missing information and ownership visible, and follow actions through to closure.', M + 12, y - 34, W - 2*M - 24, font='RC-Sans-Bold', size=9.2, leading=10.5, color=white)


def page2(c):
    header(c, 2, 'Case 01 - ERP, master data and production readiness')
    y = H - 103
    label(c, 'Core case 01', M, y)
    y -= 29
    c.setFillColor(INK)
    c.setFont('RC-Sans-Bold', 20)
    c.drawString(M, y, 'Keeping an approved change aligned')
    y -= 23
    c.drawString(M, y, 'before first production.')
    y -= 25
    y = draw_text(c, 'A sanitised reconstruction of how customer or engineering changes affected ERP, materials, suppliers, documentation and production readiness.', M, y, W - 2*M, size=9.2, leading=11, color=MUTED) - 15

    label(c, 'From change to controlled handover', M, y)
    y -= 13
    sw = (W - 2*M - 28) / 5
    steps = [
        ('01', 'Input', 'Approved customer, engineering or prototype change.'),
        ('02', 'Impact', 'BOM/route, MRP, material, treatment/test, supplier and document effects.'),
        ('03', 'Update', 'Controlled AX/D365 and readiness actions.'),
        ('04', 'Validate', 'Coverage, FAI, traceability, approvals and open risk.'),
        ('05', 'Handover', 'Production-ready records and named next actions.')
    ]
    for i, (n, title, body) in enumerate(steps):
        x = M + i*(sw + 7)
        fill = FOREST if i == 0 else LIGHT2
        box(c, x, y - 92, sw, 92, fill, None if i == 0 else LINE, 10)
        c.setFillColor(AMBER if i == 0 else COPPER)
        c.setFont('RC-Sans-Bold', 6.5)
        c.drawString(x + 8, y - 16, n)
        c.setFillColor(white if i == 0 else INK)
        c.setFont('RC-Sans-Bold', 8.5)
        c.drawString(x + 8, y - 31, title)
        draw_text(c, body, x + 8, y - 46, sw - 16, size=6.7, leading=8, color=HexColor('#CBD3CF') if i == 0 else MUTED)
    y -= 117

    label(c, 'My contribution', M, y)
    y -= 13
    cw = (W - 2*M - 10) / 2
    contributions = [
        ('Turn the change into action', 'Converted approved input into ERP, material, supplier, documentation and production-readiness actions.'),
        ('Check the full impact', 'Checked BOM/routing readiness with MRP, stock/incoming supply, shortages, phase-in/out, supplier timing, treatment/test requirements and documents.'),
        ('Keep ownership clear', 'Kept decision responsibilities, approvals, dates, open risks and next actions visible across functions.'),
        ('Protect first production', 'Followed first-article, traceability and unresolved issues before production or release.')
    ]
    positions = [(M, y-70), (M+cw+10, y-70), (M, y-150), (M+cw+10, y-150)]
    for (x, yy), (title, body) in zip(positions, contributions):
        card(c, x, yy, cw, 70, title, body, LIGHT2, accent=COPPER)
    y -= 176

    label(c, 'Case at a glance', M, y)
    y -= 13
    bw = (W - 2*M - 10) / 2
    snapshot = [
        ('Context', 'High-mix technical manufacturing with prototypes, revised parts and controlled customer requirements.'),
        ('My role', 'ERP, master-data, material and production-readiness coordination within approved authority boundaries.'),
        ('People involved', 'Engineering, Quality, Planning, Purchasing, Production, Warehouse and suppliers.'),
        ('Systems', 'Dynamics AX/D365, Excel and controlled technical documentation.')
    ]
    positions = [(M, y-54), (M+bw+10, y-54), (M, y-118), (M+bw+10, y-118)]
    for (x, yy), (title, body) in zip(positions, snapshot):
        card(c, x, yy, bw, 54, title, body, LIGHT2, accent=COPPER, title_size=8.4, body_size=7.0)
    y -= 140
    box(c, M, y - 74, W - 2*M, 74, FOREST2)
    c.setFillColor(AMBER)
    c.setFont('RC-Sans-Bold', 7)
    c.drawString(M + 12, y - 18, 'DOCUMENTED OUTCOME')
    draw_text(c, 'Created or validated 200+ complex structures in about two weeks while preserving traceability and keeping approved changes, materials and open actions aligned before execution.', M + 12, y - 37, W - 2*M - 24, font='RC-Sans-Bold', size=8.4, leading=10.0, color=white)


def page3(c):
    header(c, 3, 'Case 02 - sourcing and supplier decision support')
    # Layout hotfix: keep the full boundary block above the footer without
    # changing page-3 content. Space is recovered only from vertical gaps.
    y = H - 92
    label(c, 'Core case 02', M, y)
    y -= 29
    c.setFillColor(INK)
    c.setFont('RC-Sans-Bold', 19.5)
    c.drawString(M, y, 'Supplier performance, risk and terms')
    y -= 23
    c.drawString(M, y, 'in one clear decision view.')
    y -= 25
    y = draw_text(c, 'A sanitised reconstruction of documented technical purchasing across materials, customer-specific components, surface treatments, specialist subcontracting, external testing/inspection, RFQs, supplier decisions and follow-up across 30+ suppliers.', M, y, W - 2*M, size=9.1, leading=10.8, color=MUTED) - 10

    label(c, 'How I approached the decision', M, y)
    y -= 13
    sw = (W - 2*M - 28) / 5
    steps = [
        ('01', 'Collect', 'Supplier, commercial, delivery, inventory and capacity inputs.'),
        ('02', 'Check', 'Source date, owner, units, completeness and confidentiality.'),
        ('03', 'Compare', 'Price, capability, lead time, risk, alternatives and impact.'),
        ('04', 'Recommend', 'Options, trade-offs, who decides and required approval.'),
        ('05', 'Follow up', 'Decision log, supplier action, due date and closure.')
    ]
    for i, (n, title, body) in enumerate(steps):
        x = M + i*(sw + 7)
        fill = COPPER if i == 0 else LIGHT2
        box(c, x, y - 91, sw, 91, fill, None if i == 0 else LINE, 10)
        c.setFillColor(white if i == 0 else COPPER)
        c.setFont('RC-Sans-Bold', 6.5)
        c.drawString(x + 8, y - 16, n)
        c.setFillColor(white if i == 0 else INK)
        c.setFont('RC-Sans-Bold', 8.3)
        c.drawString(x + 8, y - 31, title)
        draw_text(c, body, x + 8, y - 46, sw - 16, size=6.65, leading=7.8, color=white if i == 0 else MUTED)
    y -= 105

    label(c, 'What I brought to the decision', M, y)
    y -= 13
    cw = (W - 2*M - 10) / 2
    cards = [
        ('Broad technical purchasing', 'Bought across materials, customer-specific components, frequent surface-treatment orders, specialist subcontracting and external testing/inspection.'),
        ('Delegated supplier ownership', 'Selected sourcing routes, introduced alternatives, reallocated requirements and concluded routine awards within delegated authority.'),
        ('Risk behind the purchase order', 'Compared price, quantity, lead time, capability, capacity, quality, documentation and production impact.'),
        ('Follow-through', 'Tracked confirmations, shortages, deviations, returns, corrective actions and recovery until closure or escalation.')
    ]
    positions = [(M, y-75), (M+cw+10, y-75), (M, y-160), (M+cw+10, y-160)]
    for (x, yy), (title, body) in zip(positions, cards):
        card(c, x, yy, cw, 75, title, body, LIGHT2, accent=FOREST2)
    y -= 175

    label(c, 'Case at a glance', M, y)
    y -= 13
    bw = (W - 2*M - 10) / 2
    snapshot = [
        ('Context', 'High-mix precision manufacturing with broad technical buying across materials, components and outsourced production/quality processes.'),
        ('My role', 'Assigned supplier and technical-purchasing portfolios, RFQs, negotiation, routine awards, POs, alternatives and recovery.'),
        ('People involved', 'Suppliers, Procurement, Engineering, Quality, Planning, Production, Warehouse and Finance.'),
        ('Systems', 'Dynamics AX/D365, Excel, supplier records and controlled documentation.')
    ]
    positions = [(M, y-54), (M+bw+10, y-54), (M, y-118), (M+bw+10, y-118)]
    for (x, yy), (title, body) in zip(positions, snapshot):
        card(c, x, yy, bw, 54, title, body, LIGHT2, accent=FOREST2, title_size=8.4, body_size=7.0)
    y -= 130
    box(c, M, y - 76, W - 2*M, 76, SAGE)
    c.setFillColor(FOREST)
    c.setFont('RC-Sans-Bold', 7)
    c.drawString(M + 12, y - 18, 'DOCUMENTED OUTCOME')
    draw_text(c, 'Caught conflicting cost and sales-price data affecting 100+ items before a major quotation and maintained structured follow-up across 30+ suppliers.', M + 12, y - 38, W - 2*M - 24, font='RC-Sans-Bold', size=8.5, leading=10.1, color=INK)
    y -= 88
    box(c, M, y - 55, W - 2*M, 55, FOREST)
    c.setFillColor(AMBER)
    c.setFont('RC-Sans-Bold', 7)
    c.drawString(M + 12, y - 17, 'BOUNDARY')
    draw_text(c, 'Routine sourcing and supplier decisions were handled within delegated authority. Exceptional, unusually high-value or high-risk commitments were checked with the responsible manager.', M + 12, y - 34, W - 2*M - 24, size=8.0, leading=9.3, color=white)


def page4(c):
    header(c, 4, 'Methods, role fit and how I start')
    y = H - 103
    label(c, 'Problem solving and practical technology', M, y)
    y -= 27
    c.setFillColor(INK)
    c.setFont('RC-Sans-Bold', 19)
    c.drawString(M, y, 'Understand the problem before choosing the tool.')
    y -= 31

    box(c, M, y - 108, W - 2*M, 108, LIGHT2, LINE, 12)
    c.setFillColor(COPPER)
    c.setFont('RC-Sans-Bold', 7.2)
    c.drawString(M + 13, y - 18, 'HOW I APPROACH A RECURRING PROBLEM')
    draw_text(c, 'When something keeps going wrong, I first work out whether we understand the real cause. I check the source information, what is affected and who needs to make the decision. Then I focus on a fix that people can actually use in day-to-day work.', M + 13, y - 39, W - 2*M - 26, font='RC-Sans-Bold', size=8.7, leading=10.5, color=INK)
    draw_text(c, 'Tools when they help: root-cause analysis, impact mapping, structured checks, reporting, automation and AI. The tool itself is never the point.', M + 13, y - 82, W - 2*M - 26, size=7.7, leading=9.1, color=MUTED)
    y -= 130

    box(c, M, y - 70, W - 2*M, 70, FOREST)
    c.setFillColor(AMBER)
    c.setFont('RC-Sans-Bold', 7.2)
    c.drawString(M + 13, y - 18, 'TECHNOLOGY IN PRACTICE')
    draw_text(c, 'Technology can help with preparation and visibility, but it should support the work rather than become the work. The final decision stays with the responsible person.', M + 13, y - 38, W - 2*M - 26, font='RC-Sans-Bold', size=8.6, leading=10.2, color=white)
    y -= 93

    label(c, 'How I start', M, y)
    y -= 13
    sw = (W - 2*M - 21) / 4
    weeks = [
        ('01-30', 'Map the operation', 'Risks, sources, decision boundaries, owners and signals.'),
        ('31-60', 'Stabilise', 'One exception view, work instruction or practical control.'),
        ('61-90', 'Improve', 'One measurable change with a named owner and a clear review rhythm.'),
        ('Next', 'Scale carefully', 'Only after people use the routine reliably; add automation or AI only where it clearly helps.')
    ]
    for i, (period, title, body) in enumerate(weeks):
        x = M + i*(sw + 7)
        fill = FOREST2 if i == 0 else LIGHT2
        box(c, x, y - 79, sw, 79, fill, None if i == 0 else LINE, 10)
        c.setFillColor(AMBER if i == 0 else COPPER)
        c.setFont('RC-Sans-Bold', 6.2)
        c.drawString(x + 8, y - 16, period)
        c.setFillColor(white if i == 0 else INK)
        c.setFont('RC-Sans-Bold', 8.3)
        c.drawString(x + 8, y - 31, title)
        draw_text(c, body, x + 8, y - 46, sw - 16, size=6.7, leading=8, color=HexColor('#CBD3CF') if i == 0 else MUTED)
    y -= 103

    label(c, 'Best-fit roles', M, y)
    y -= 13
    roles = [
        'Technical Buyer / Tactical Buyer',
        'Procurement Operations / Supplier Performance',
        'ERP / Master Data / Configuration',
        'Supply Planning / Production Readiness',
        'Process Excellence / Quality Documentation'
    ]
    rw = (W - 2*M - 16) / 3
    for i, role in enumerate(roles):
        if i < 3:
            x = M + i*(rw + 8)
            yy = y - 33
            w = rw
        else:
            w = (W - 2*M - 8) / 2
            x = M + (i - 3)*(w + 8)
            yy = y - 75
        box(c, x, yy, w, 33, SAGE if i in (0,3) else LIGHT2, LINE, 8)
        c.setFillColor(INK)
        c.setFont('RC-Sans-Bold', 7.1)
        draw_text(c, role, x + 8, yy + 19, w - 16, font='RC-Sans-Bold', size=7.1, leading=8.0, color=INK, max_lines=2)

    y -= 93
    box(c, M, y - 45, W - 2*M, 45, HexColor('#F7F3EA'), LINE, 9)
    c.setFillColor(COPPER)
    c.setFont('RC-Sans-Bold', 6.5)
    c.drawString(M + 10, y - 14, 'EARLIER COMMERCIAL OPERATIONS EXPERIENCE')
    draw_text(c, 'Earlier French and European operations experience covered customer and order data, pricing, invoicing, payment follow-up, delivery coordination and issue resolution in NAV/Navision.', M + 10, y - 27, W - 2*M - 20, size=6.8, leading=7.8, color=MUTED, max_lines=2)

    y -= 57
    box(c, M, y - 49, W - 2*M, 49, LIGHT2, LINE, 10)
    c.setFillColor(COPPER)
    c.setFont('RC-Sans-Bold', 6.8)
    c.drawString(M + 10, y - 14, 'OPERATING ENVIRONMENTS')
    draw_text(c, 'Defence/advanced manufacturing | FMCG: 5 lines / 40+ variants | Nordic WMS/distribution | SAP purchasing: 15-20 suppliers | ISO 9001/Lean.', M + 10, y - 28, W - 2*M - 20, size=7.1, leading=8.2, color=MUTED, max_lines=2)



def page5(c):
    header(c, 5, 'Broader responsibility and next steps')
    y = H - 103
    label(c, 'Career progression', M, y)
    y -= 29
    c.setFillColor(INK)
    c.setFont('RC-Sans-Bold', 20)
    c.drawString(M, y, 'Strong operational experience.')
    y -= 23
    c.setFillColor(FOREST2)
    c.drawString(M, y, 'A clear next step.')
    y -= 25
    y = draw_text(c, 'My next step is to take on wider supplier portfolios, more complex sourcing decisions and supplier development while staying close to day-to-day operations.', M, y, W - 2*M, size=9.1, leading=10.8, color=MUTED) - 14

    label(c, 'A practical progression path', M, y)
    y -= 13
    sw = (W - 2*M - 16) / 3
    stages = [
        ('01', 'What I handle today', 'Assigned supplier and broad technical-purchasing portfolios across materials, components and outsourced processes; sourcing routes, RFQs, negotiation, delegated awards, ERP data and production readiness.'),
        ('02', 'What I am ready to take on next', 'Wider supplier portfolios, more complex sourcing decisions, supplier development and a stronger contribution to category work.'),
        ('03', 'Where I want to grow', 'Toward broader category or procurement responsibility as I build more strategic ownership, measurable value and experience leading workstreams and supporting others.')
    ]
    for i, (n, title, body) in enumerate(stages):
        x = M + i*(sw + 8)
        fill = FOREST if i == 0 else (SAGE if i == 1 else LIGHT2)
        box(c, x, y - 126, sw, 126, fill, None if i != 2 else LINE, 11)
        c.setFillColor(AMBER if i == 0 else COPPER)
        c.setFont('RC-Sans-Bold', 6.7)
        c.drawString(x + 10, y - 17, n)
        c.setFillColor(white if i == 0 else INK)
        title_bottom = draw_text(c, title, x + 10, y - 34, sw - 20, font='RC-Sans-Bold', size=9.1, leading=10.2, color=white if i == 0 else INK, max_lines=3)
        draw_text(c, body, x + 10, min(title_bottom - 8, y - 55), sw - 20, size=7.0, leading=8.3, color=HexColor('#CBD3CF') if i == 0 else MUTED, max_lines=8)
    y -= 151

    label(c, 'Leadership in practice', M, y)
    y -= 13
    cw = (W - 2*M - 10) / 2
    leadership = [
        ('Delegated decisions', 'Handled routine sourcing and supplier decisions within delegated authority and escalated exceptional risk with evidence.'),
        ('Cross-functional coordination', 'Worked across Procurement, Engineering, Quality, Planning, Production, Warehouse and 30+ suppliers to keep priorities, risks and next actions aligned.'),
        ('Repeatable control', 'Used grouped setup and validation checks to create or validate 200+ complex structures in about two weeks.'),
        ('Continuity under pressure', 'Maintained critical supply and production-readiness follow-up for about three weeks during reduced team coverage.')
    ]
    positions = [(M, y-66), (M+cw+10, y-66), (M, y-142), (M+cw+10, y-142)]
    for (x, yy), (title, body) in zip(positions, leadership):
        card(c, x, yy, cw, 66, title, body, LIGHT2, accent=COPPER)
    y -= 165

    label(c, 'How I think about procurement', M, y)
    y -= 13
    box(c, M, y - 92, W - 2*M, 92, LIGHT2, LINE, 12)
    c.setFillColor(FOREST)
    c.setFont('RC-Sans-Bold', 11.2)
    c.drawString(M + 13, y - 24, 'Good procurement depends on reliable information and sound judgement.')
    draw_text(c, 'I look beyond unit price, consider the real supply risk and keep the solution practical enough to work in day-to-day operations.', M + 13, y - 45, W - 2*M - 26, size=8.2, leading=9.8, color=MUTED)
    draw_text(c, 'Technology can improve preparation and visibility, but accountability stays with the person making the decision.', M + 13, y - 70, W - 2*M - 26, font='RC-Sans-Bold', size=8.0, leading=9.5, color=INK)


def build():
    OUT.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(OUT), pagesize=A4, pageCompression=1)
    c.setTitle(f'Romaric Clementi Technical Procurement, Supply Planning & ERP Portfolio V{VERSION}')
    c.setAuthor('Romaric Clementi')
    c.setSubject('Documented technical procurement, supply planning, ERP, master data, production readiness, operational improvement and responsible technology')
    for fn in (page1, page2, page3, page4, page5):
        fn(c)
        c.showPage()
    c.save()
    print(OUT)


if __name__ == '__main__':
    build()
