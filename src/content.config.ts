import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const pages = defineCollection({
  loader: glob({ base: './src/content/pages', pattern: '*.json' }),
  schema: z.object({
    pageId: z.string(),
    seo: z.object({
      title: z.string().min(20).max(65),
      description: z.string().min(50).max(170),
      canonical: z.url(),
      keywords: z.array(z.string()).default([]),
    }),
    copy: z.record(z.string(), z.string()),
    imageAlt: z.record(z.string(), z.string()).optional(),
    copyLists: z.object({
      serviceTypes: z.array(z.string()),
      platforms: z.array(z.string()),
      glanceItems: z.array(z.object({ number: z.string(), title: z.string(), description: z.string(), href: z.string().optional() })),
      capabilities: z.array(z.object({ title: z.string(), description: z.string(), href: z.string() })),
      teamRoles: z.array(z.object({ role: z.string(), tasks: z.string() })),
      planInclusions: z.array(z.string()),
      outletExamples: z.array(z.number()),
      demoAgenda: z.array(z.object({ title: z.string(), description: z.string() })),
    }).optional(),
    billingLists: z.object({
      steps: z.array(z.object({ number: z.string(), title: z.string(), description: z.string() })),
      serviceTypes: z.array(z.object({ number: z.string(), title: z.string(), description: z.string() })),
      details: z.array(z.object({ letter: z.string(), title: z.string(), description: z.string() })),
    }).optional(),
    pricing: z.object({ multiOutletAnnualPerOutlet: z.string(), minimumOutlets: z.number(), exampleOutlets: z.array(z.number()) }).optional(),
    pricingLists: z.object({ includedFeatures: z.array(z.string()), separatelyQuoted: z.array(z.string()), boundaries: z.array(z.object({ number: z.string(), kind: z.enum(['text', 'list']), title: z.string(), description: z.string() })).optional() }).optional(),
    kitchenLists: z.object({
      workflowSteps: z.array(z.object({ number: z.string(), title: z.string(), description: z.string() })),
      ticketDetails: z.array(z.object({ title: z.string(), description: z.string() })),
      stages: z.array(z.object({ title: z.string(), description: z.string() })),
      changeDetails: z.array(z.object({ number: z.string(), title: z.string(), description: z.string() })),
    }).optional(),
    kotLists: z.object({
      workflowSteps: z.array(z.object({ number: z.string(), title: z.string(), description: z.string() })),
      ticketDetails: z.array(z.object({ title: z.string(), description: z.string() })),
      comparisonRows: z.array(z.object({ name: z.string(), purpose: z.string() })),
      faqs: z.array(z.object({ question: z.string(), answer: z.string() })),
    }).optional(),
    menuLists: z.object({
      catalogParts: z.array(z.object({ title: z.string(), description: z.string() })),
      workflowSteps: z.array(z.object({ number: z.string(), title: z.string(), description: z.string() })),
      outletModes: z.array(z.object({ title: z.string(), description: z.string() })),
      faqs: z.array(z.object({ question: z.string(), answer: z.string() })),
    }).optional(),
    orderLists: z.object({
      orderTypes: z.array(z.object({ title: z.string(), description: z.string() })),
      workflowSteps: z.array(z.object({ number: z.string(), title: z.string(), description: z.string() })),
      faqs: z.array(z.object({ question: z.string(), answer: z.string() })),
    }).optional(),
    multiOutletLists: z.object({
      workflowSteps: z.array(z.object({ number: z.string(), title: z.string(), description: z.string() })),
      operatingParts: z.array(z.object({ title: z.string(), description: z.string() })),
      scenarioSteps: z.array(z.object({ title: z.string(), description: z.string() })),
      faqs: z.array(z.object({ question: z.string(), answer: z.string() })),
    }).optional(),
    tableLists: z.object({
      floorStates: z.array(z.object({ title: z.string(), description: z.string() })),
      workflowSteps: z.array(z.object({ number: z.string(), title: z.string(), description: z.string() })),
      faqs: z.array(z.object({ question: z.string(), answer: z.string() })),
    }).optional(),
    cafeLists: z.object({
      serviceTypes: z.array(z.object({ title: z.string(), description: z.string() })),
      drinkSetup: z.array(z.object({ title: z.string(), description: z.string() })),
      workflowSteps: z.array(z.object({ number: z.string(), title: z.string(), description: z.string() })),
      faqs: z.array(z.object({ question: z.string(), answer: z.string() })),
    }).optional(),
    cashLists: z.object({
      controls: z.array(z.object({ title: z.string(), description: z.string() })),
      workflowSteps: z.array(z.object({ number: z.string(), title: z.string(), description: z.string() })),
      faqs: z.array(z.object({ question: z.string(), answer: z.string() })),
    }).optional(),
    salesReportLists: z.object({
      reportGroups: z.array(z.object({ title: z.string(), reports: z.array(z.object({ title: z.string(), description: z.string() })) })),
      workflowSteps: z.array(z.object({ number: z.string(), title: z.string(), description: z.string() })),
      faqs: z.array(z.object({ question: z.string(), answer: z.string() })),
    }).optional(),
    managementPillarLists: z.object({
      workflowSteps: z.array(z.object({ number: z.string(), title: z.string(), description: z.string() })),
      workspaces: z.array(z.object({ title: z.string(), description: z.string(), href: z.string().startsWith('/'), linkLabel: z.string() })),
    }).optional(),
    featureDirectory: z.array(z.object({
      number: z.string(),
      category: z.string(),
      title: z.string(),
      description: z.string(),
      href: z.string().startsWith('/'),
      linkLabel: z.string(),
    })).optional(),
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    privacySections: z.array(z.object({ title: z.string(), paragraphs: z.array(z.string()) })).optional(),
    plans: z.array(z.object({ months: z.number(), price: z.string() })).optional(),
  }).superRefine((page, ctx) => {
    if (page.pageId === 'kot-management') {
      if (!page.kotLists) {
        ctx.addIssue({ code: 'custom', path: ['kotLists'], message: 'KOT page requires workflow, ticket details, comparison rows and FAQs.' });
      }
      if (!page.imageAlt?.kotKitchenQueue) {
        ctx.addIssue({ code: 'custom', path: ['imageAlt', 'kotKitchenQueue'], message: 'KOT page requires descriptive Kitchen Queue screenshot alt text.' });
      }
    }
    if (page.pageId === 'restaurant-menu-management') {
      if (!page.menuLists) {
        ctx.addIssue({ code: 'custom', path: ['menuLists'], message: 'Menu page requires catalog parts, workflow steps, outlet modes and FAQs.' });
      }
      if (!page.imageAlt?.centralMenu || !page.imageAlt?.posMenu) {
        ctx.addIssue({ code: 'custom', path: ['imageAlt'], message: 'Menu page requires descriptive central-menu and POS-menu screenshot alt text.' });
      }
    }
    if (page.pageId === 'multi-outlet-restaurant-management') {
      if (!page.multiOutletLists) {
        ctx.addIssue({ code: 'custom', path: ['multiOutletLists'], message: 'Multi-outlet page requires workflow, operating parts, scenario steps and FAQs.' });
      }
      if (!page.imageAlt?.centralMenu || !page.imageAlt?.reports) {
        ctx.addIssue({ code: 'custom', path: ['imageAlt'], message: 'Multi-outlet page requires descriptive central-menu and reports screenshot alt text.' });
      }
    }
    if (page.pageId === 'restaurant-order-management') {
      if (!page.orderLists) {
        ctx.addIssue({ code: 'custom', path: ['orderLists'], message: 'Order management page requires service types, workflow steps and FAQs.' });
      }
      if (!page.imageAlt?.orderManagement) {
        ctx.addIssue({ code: 'custom', path: ['imageAlt', 'orderManagement'], message: 'Order management page requires descriptive order-entry screenshot alt text.' });
      }
    }
    if (page.pageId === 'restaurant-table-management') {
      if (!page.tableLists || !page.tableLists.floorStates.length || !page.tableLists.workflowSteps.length || !page.tableLists.faqs.length) {
        ctx.addIssue({ code: 'custom', path: ['tableLists'], message: 'Table page requires floor states, workflow steps and FAQs.' });
      }
      if (!page.imageAlt?.floorView) ctx.addIssue({ code: 'custom', path: ['imageAlt', 'floorView'], message: 'Table page requires descriptive floor screenshot alt text.' });
    }
    if (page.pageId === 'cafe-pos') {
      if (!page.cafeLists || !page.cafeLists.serviceTypes.length || !page.cafeLists.drinkSetup.length || !page.cafeLists.workflowSteps.length || !page.cafeLists.faqs.length) {
        ctx.addIssue({ code: 'custom', path: ['cafeLists'], message: 'Cafe POS page requires service types, drink setup, workflow steps and FAQs.' });
      }
      if (!page.imageAlt?.cafePosMenu || !page.imageAlt?.cafePosReports) {
        ctx.addIssue({ code: 'custom', path: ['imageAlt'], message: 'Cafe POS page requires descriptive menu and reports screenshot alt text.' });
      }
    }
    if (page.pageId === 'restaurant-cash-management') {
      if (!page.cashLists || !page.cashLists.controls.length || !page.cashLists.workflowSteps.length || !page.cashLists.faqs.length) {
        ctx.addIssue({ code: 'custom', path: ['cashLists'], message: 'Cash management page requires controls, workflow steps and FAQs.' });
      }
      if (!page.imageAlt?.cashShiftPhone) {
        ctx.addIssue({ code: 'custom', path: ['imageAlt', 'cashShiftPhone'], message: 'Cash management page requires descriptive My Shift screenshot alt text.' });
      }
    }
    if (page.pageId === 'restaurant-sales-reports') {
      if (!page.salesReportLists || !page.salesReportLists.reportGroups.length || page.salesReportLists.reportGroups.some(group => !group.reports.length) || !page.salesReportLists.workflowSteps.length || !page.salesReportLists.faqs.length) {
        ctx.addIssue({ code: 'custom', path: ['salesReportLists'], message: 'Sales reports page requires report views, review steps and FAQs.' });
      }
      if (!page.imageAlt?.salesReportsPhone) {
        ctx.addIssue({ code: 'custom', path: ['imageAlt', 'salesReportsPhone'], message: 'Sales reports page requires descriptive Reports screenshot alt text.' });
      }
    }
    if (page.pageId === 'restaurant-management-software') {
      if (!page.managementPillarLists || page.managementPillarLists.workflowSteps.length < 3 || page.managementPillarLists.workspaces.length < 5) {
        ctx.addIssue({ code: 'custom', path: ['managementPillarLists'], message: 'Restaurant management pillar requires workflow steps and linked product workspaces.' });
      }
      if (!page.imageAlt?.managementPillarDesktop || !page.imageAlt?.managementPillarFloor || !page.imageAlt?.managementPillarKitchen) {
        ctx.addIssue({ code: 'custom', path: ['imageAlt'], message: 'Restaurant management pillar requires descriptions for its POS, floor and kitchen screenshots.' });
      }
    }
  }),
});

export const collections = { pages };
